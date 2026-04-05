"use client"

import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Ahmed",
    location: "Dhaka, Bangladesh",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    rating: 5,
    text: "The quality of Remeni&apos;s clothing is exceptional. I&apos;ve never felt more confident in traditional wear that still feels modern and comfortable.",
  },
  {
    id: 2,
    name: "Rahman Khan",
    location: "Chittagong, Bangladesh",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
    text: "Finally found a brand that understands both quality and style. The Panjabi collection is outstanding - perfect for every occasion.",
  },
  {
    id: 3,
    name: "Fatima Begum",
    location: "Sylhet, Bangladesh",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    rating: 5,
    text: "Remeni&apos;s attention to detail is remarkable. From the fabric to the stitching, everything speaks of premium craftsmanship.",
  },
  {
    id: 4,
    name: "Karim Hossain",
    location: "Rajshahi, Bangladesh",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    rating: 5,
    text: "The best online shopping experience I&apos;ve had. Fast delivery, great customer service, and the clothes exceeded my expectations.",
  },
]

export function Testimonials() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          
            <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
              What Our Customers Say
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold">
              Testimonials
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-none w-80 sm:w-96 p-6 sm:p-8 bg-card border border-border"
            >
              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-foreground/80 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
