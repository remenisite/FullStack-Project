"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"

const trendingProducts = [
  {
    id: "1",
    name: "Silk Blend Kurta",
    price: 89.00,
    originalPrice: 120.00,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    category: "Men",
    isNew: true,
  },
  {
    id: "2",
    name: "Embroidered Saree",
    price: 245.00,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    category: "Women",
    isNew: true,
  },
  {
    id: "3",
    name: "Linen Summer Shirt",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    category: "Men",
  },
  {
    id: "4",
    name: "Handwoven Shawl",
    price: 125.00,
    originalPrice: 160.00,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
    category: "Women",
    isSale: true,
  },
  {
    id: "5",
    name: "Cotton Palazzo",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&q=80",
    category: "Women",
    isNew: true,
  },
  {
    id: "6",
    name: "Traditional Panjabi",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
    category: "Men",
  },
]

export function TrendingProducts() {
  const scrollRef = useRef(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          
            <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
              Most Popular
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold">
              Trending Now
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

        {/* Products Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {trendingProducts.map((product) => (
            <div key={product.id} className="flex-none w-72">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
