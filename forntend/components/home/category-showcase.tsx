"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const categories = [
  {
    id: "men",
    name: "Men",
    description: "Contemporary styles for the modern gentleman",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
    productCount: 124,
  },
  {
    id: "women",
    name: "Women",
    description: "Elegant designs that celebrate femininity",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    productCount: 186,
  },
  {
    id: "kids",
    name: "Kids",
    description: "Playful fashion for little ones",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80",
    productCount: 78,
  },
]

export function CategoryShowcase() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
            Shop By Category
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold">
            Find Your Style
          </h2>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.id}`}
              className="group relative overflow-hidden bg-card"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-3xl font-semibold text-primary-foreground">
                      {category.name}
                    </h3>
                    <p className="mt-1 text-sm text-primary-foreground/80">
                      {category.productCount} Products
                    </p>
                  </div>
                  <div className="p-3 bg-background text-foreground rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
