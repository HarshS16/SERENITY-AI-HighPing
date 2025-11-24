"use client"

import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import Image from "next/image"

export function ScrollShowcaseSection() {
  return (
    <section className="relative py-4 px-4 bg-background">
      <div className="flex flex-col overflow-hidden pb-8 pt-8">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
                See the Results
                <br />
                <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Real Growth, Real Progress
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Track your emotional wellness journey with detailed analytics and insights
              </p>
            </>
          }
        >
          <Image
            src="/serenity-analytics-dashboard.jpg"
            alt="Serenity Analytics Dashboard"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top shadow-2xl"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  )
}
