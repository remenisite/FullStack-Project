"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    id: 1,
    name: "Summer Essence",
    description: "Light fabrics for warmer days",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    href: "/products?collection=summer",
  },
  {
    id: 2,
    name: "Heritage Weaves",
    description: "Traditional craftsmanship",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    href: "/products?collection=heritage",
  },
  {
    id: 3,
    name: "Modern Minimal",
    description: "Clean lines, bold statements",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    href: "/products?collection=minimal",
  },
]

export function FeaturedCollections() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
            Curated For You
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold">
            Featured Collections
          </h2>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <p className="text-xs font-medium tracking-[0.2em] text-primary-foreground/70 uppercase">
                  Collection {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-primary-foreground">
                  {collection.name}
                </h3>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  {collection.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground group-hover:gap-4 transition-all">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
