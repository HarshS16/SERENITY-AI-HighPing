"use client"
import { CometAnimation } from "@/components/ui/comet-animation"
import { GradientButton } from "@/components/ui/gradient-button"
import { ChevronDown } from "lucide-react"
import { HeroShaderBackground } from "@/components/ui/hero-shader-background"

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <HeroShaderBackground />
        <CometAnimation />
      </div>

      <div className="absolute inset-0 top-0 h-[150vh] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="text-sm font-medium text-primary bg-primary/10 rounded-full px-4 py-2">AI That Listens</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          Your voice tells a story.
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            We listen with empathy.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Serenity is an AI companion that understands you—not just what you say, but how you feel. Through vocal
          analysis, stress detection, and emotional intelligence, we create meaningful conversations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <GradientButton className="min-w-[200px]">Start Free Trial</GradientButton>
          <button className="px-6 py-3 border border-border rounded-full font-medium hover:bg-muted/50 transition flex items-center gap-2">
            Watch Demo <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  )
}
