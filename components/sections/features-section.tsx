"use client"

import type React from "react"

import { GlowingEffect } from "@/components/ui/glowing-effect"
import { Brain, BarChart3, Zap, Shield, Mic, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Brain,
    title: "Emotional Intelligence",
    description: "AI that understands context, tone, and emotional nuance in every conversation",
    span: "md:col-span-6 lg:col-span-4 md:row-span-1 lg:row-span-1",
  },
  {
    icon: Mic,
    title: "Vocal Analysis",
    description: "Detects stress patterns, rhythm changes, and speech characteristics in real-time",
    span: "md:col-span-6 lg:col-span-4 md:row-span-1 lg:row-span-1",
  },
  {
    icon: Heart,
    title: "Empathetic Responses",
    description: "Responses tailored to your emotional state and conversation context",
    span: "md:col-span-12 lg:col-span-4 md:row-span-1 lg:row-span-2",
  },
  {
    icon: BarChart3,
    title: "Progress Insights",
    description: "Track your emotional well-being with detailed analytics and trends",
    span: "md:col-span-6 lg:col-span-5 md:row-span-1 lg:row-span-1",
  },
  {
    icon: Zap,
    title: "Instant Support",
    description: "Available 24/7 for conversations, guidance, and emotional support",
    span: "md:col-span-6 lg:col-span-7 md:row-span-1 lg:row-span-1",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your conversations are encrypted and never shared with third parties",
    span: "md:col-span-12 lg:col-span-3 md:row-span-1 lg:row-span-2",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative py-12 px-4 bg-background" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features for Real Connection</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for meaningful, intelligent conversations
          </p>
        </div>

        {/* Bento Grid */}
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-12 md:grid-rows-3 lg:grid-cols-12 lg:grid-rows-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  span: string
  index: number
}

function FeatureCard({ icon: Icon, title, description, span, index }: FeatureCardProps) {
  return (
    <li className={cn("min-h-[12rem] list-none", span)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background/50 p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}
