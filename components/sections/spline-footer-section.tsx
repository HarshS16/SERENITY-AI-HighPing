"use client"

import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Phone } from "lucide-react"

export function SplineFooterSection() {
  return (
    <footer className="relative w-full py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <Card className="w-full bg-background relative overflow-hidden rounded-2xl border-border">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="currentColor" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                  <span className="font-bold text-sm text-primary-foreground">S</span>
                </div>
                <span className="font-bold text-lg">Serenity</span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Mental Health Artificial Support. Your voice is our language. We listen, understand, and support your emotional wellness journey.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition text-sm">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#demo" className="text-muted-foreground hover:text-foreground transition text-sm">
                    Demo
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition text-sm">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Resources */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                    API Status
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact */}
            <div className="md:col-span-1">
              <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start text-muted-foreground text-sm">
                  <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>support@serenity.example</span>
                </li>
                <li className="flex items-start text-muted-foreground text-sm">
                  <Phone className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Serenity. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition text-sm">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  )
}