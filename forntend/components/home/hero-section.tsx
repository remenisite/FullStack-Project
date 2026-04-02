"use client"

import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
        >
          <source
            src="https://videos.pexels.com/video-files/3753716/3753716-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-[0.3em] text-primary-foreground/80 uppercase animate-fade-up opacity-0 stagger-1">
              New Collection 2026
            </p>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-[1.1] animate-fade-up opacity-0 stagger-2">
              Timeless
              <br />
              Elegance
              <br />
              <span className="italic">Redefined</span>
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-md leading-relaxed animate-fade-up opacity-0 stagger-3">
              Discover our latest collection of premium Bangladeshi fashion, 
              where tradition meets contemporary design.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up opacity-0 stagger-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-medium tracking-wide hover:bg-primary-foreground/90 transition-colors"
              >
                View Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="inline-flex items-center gap-2 px-6 py-4 border border-primary-foreground/50 text-primary-foreground font-medium tracking-wide hover:bg-primary-foreground/10 transition-colors"
              >
                <Play className="h-4 w-4" />
                Watch Story
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up opacity-0 stagger-5">
        <span className="text-xs text-primary-foreground/60 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/60 to-transparent" />
      </div>
    </section>
  )
}
