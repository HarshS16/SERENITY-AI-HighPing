"use client"

import { SparklesCore } from "@/components/ui/sparkles"
import { Play } from "lucide-react"
import { useState } from "react"

export function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="relative py-12 px-4 bg-background" id="demo">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See Serenity in Action</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch how Serenity analyzes vocal patterns and responds with genuine empathy
          </p>
        </div>

        {/* Demo Video Container */}
        <div className="relative mb-12">
          <div className="relative bg-gradient-to-b from-primary/5 to-transparent rounded-2xl border border-border overflow-hidden">
            {/* Video Container */}
            <div
              className="relative aspect-video bg-background rounded-xl overflow-hidden group cursor-pointer"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />

              {isPlaying ? (
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Serenity Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <video
                    src="https://videos.pexels.com/video-files/3573696/3573696-sd_640_360_24fps.mp4"
                    className="w-full h-full object-cover opacity-50"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 675'%3E%3Crect fill='%23111'/%3E%3C/svg%3E"
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/90 transition-all transform shadow-lg">
                      <Play className="w-8 h-8 text-background fill-background ml-1" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="relative h-32 mt-4">
            <div className="absolute inset-0 rounded-2xl">
              <SparklesCore
                id="tsparticles-demo"
                background="transparent"
                minSize={0.4}
                maxSize={0.8}
                particleDensity={80}
                className="w-full h-full"
                particleColor="#8b5cf6"
                speed={2}
              />
            </div>

            {/* Text overlay on sparkles */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
              <h3 className="text-xl md:text-2xl font-bold text-center mb-1">
                Experience Real-Time Emotional Analysis
              </h3>
              <p className="text-muted-foreground text-center max-w-xl text-xs md:text-sm">
                Our AI detects stress, rhythm variations, and emotional undertones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
