"use client"

import { GradientButton } from "@/components/ui/gradient-button"
import { SparklesCore } from "@/components/ui/sparkles"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-16 px-4 bg-background flex items-center overflow-hidden" id="pricing">
      {/* Background Sparkles - integrated with main animation */}
      <div className="absolute inset-0">
        <SparklesCore
          id="tsparticles-cta"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#8b5cf6"
          speed={1}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Ready to start your journey?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Join thousands of users who have found comfort, support, and understanding through Serenity
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <GradientButton className="min-w-[240px] text-lg">
            Get Started Free <ArrowRight className="w-5 h-5" />
          </GradientButton>
          <button className="px-8 py-3 border border-border rounded-full font-medium hover:bg-muted/50 transition text-lg">
            Schedule Demo
          </button>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { label: "Free Forever", value: "$0" },
            { label: "Pro Plan", value: "$9.99" },
            { label: "Premium", value: "$19.99" },
          ].map((plan, i) => (
            <div
              key={i}
              className="p-6 rounded-lg border border-border/50 bg-background/30 backdrop-blur-md hover:border-border/80 transition"
            >
              <p className="text-muted-foreground mb-2 text-sm">{plan.label}</p>
              <p className="text-3xl font-bold">{plan.value}</p>
              <p className="text-xs text-muted-foreground mt-2">/month</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
