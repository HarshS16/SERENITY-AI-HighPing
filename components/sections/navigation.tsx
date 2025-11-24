"use client"

import { GradientButton } from "@/components/ui/gradient-button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
            <span className="font-bold text-sm text-primary-foreground">S</span>
          </div>
          <span className="font-bold text-lg hidden sm:inline">Serenity</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
            Features
          </Link>
          <Link href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition">
            Demo
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
            Pricing
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* <button className="px-4 py-2 text-sm font-medium text-foreground border border-border rounded-full hover:bg-muted/50 transition">
            Sign In
          </button> */}
          <Link href="/dashboard">
            <GradientButton>Try Serenity</GradientButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/80 p-4 space-y-4">
          <Link href="#features" className="block text-sm text-muted-foreground hover:text-foreground">
            Features
          </Link>
          <Link href="#demo" className="block text-sm text-muted-foreground hover:text-foreground">
            Demo
          </Link>
          <Link href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground">
            Pricing
          </Link>
          <Link href="/dashboard" className="block">
            <GradientButton className="w-full">Try Serenity</GradientButton>
          </Link>
        </div>
      )}
    </nav>
  )
}
