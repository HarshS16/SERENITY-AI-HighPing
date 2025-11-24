"use client"
// import { Mic3DWaveform } from "@/components/ui/mic-3d-waveform"

export function MicWaveformSection() {
  return (
    <div className="relative w-full py-8 md:py-12 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm">
      {/* <Mic3DWaveform /> */}

      <p className="mt-6 text-center text-muted-foreground max-w-2xl z-10 relative px-4 text-sm md:text-base">
        Serenity listens to your voice—every tone, every pause, every emotion. Your vocal markers tell a story we're
        here to understand.
      </p>
    </div>
  )
}
