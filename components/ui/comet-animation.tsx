"use client"

import { useEffect, useRef } from "react"

export function CometAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = container.clientWidth
    canvas.height = container.clientHeight
    container.appendChild(canvas)

    const resizeCanvas = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }
    window.addEventListener("resize", resizeCanvas)

    const comets: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      trail: Array<{ x: number; y: number; alpha: number }>
    }> = []

    let time = 0

    const animate = () => {
      time += 0.016
      ctx!.clearRect(0, 0, canvas.width, canvas.height)

      if (Math.random() < 0.02) {
        const angle = Math.random() * Math.PI * 2
        comets.push({
          x: canvas.width / 2,
          y: canvas.height / 2,
          vx: Math.cos(angle) * 2,
          vy: Math.sin(angle) * 2,
          life: 0,
          maxLife: 120,
          trail: [],
        })
      }

      for (let i = comets.length - 1; i >= 0; i--) {
        const comet = comets[i]
        comet.life++
        comet.x += comet.vx
        comet.y += comet.vy

        comet.trail.push({ x: comet.x, y: comet.y, alpha: 1 })
        if (comet.trail.length > 40) comet.trail.shift()

        comet.trail.forEach((point, idx) => {
          const alpha = (idx / comet.trail.length) * (1 - comet.life / comet.maxLife)
          const gradient = ctx!.createRadialGradient(point.x, point.y, 0, point.x, point.y, 2)
          gradient.addColorStop(0, `rgba(168, 85, 247, ${alpha * 0.6})`)
          gradient.addColorStop(1, `rgba(59, 130, 246, ${alpha * 0.2})`)
          ctx!.fillStyle = gradient
          ctx!.beginPath()
          ctx!.arc(point.x, point.y, 2, 0, Math.PI * 2)
          ctx!.fill()
        })

        if (comet.life > comet.maxLife) comets.splice(i, 1)
      }

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (container.contains(canvas)) container.removeChild(canvas)
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
}
