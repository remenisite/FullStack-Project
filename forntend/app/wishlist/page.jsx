"use client"

import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Heart, ArrowRight } from "lucide-react"

const initialWishlistItems = [
  {
    id: "1",
    name: "Silk Blend Kurta",
    price: 89,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
    category: "Men",
    isNew: true,
  },
  {
    id: "4",
    name: "Handwoven Shawl",
    price: 125,
    originalPrice: 160,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
    category: "Women",
    isSale: true,
  },
  {
    id: "7",
    name: "Geometric Print Dress",
    price: 145,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    category: "Women",
    isNew: true,
  },
]

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems)

  const removeFromWishlist = (id) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-center">
            My Wishlist
          </h1>
          <p className="mt-4 text-muted-foreground text-center">
            {wishlistItems.length} items saved
          </p>
        </div>
      </section>

      {/* Wishlist Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty
              <p className="text-muted-foreground mb-8">
                Start adding items you love to your wishlist.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
                {wishlistItems.map((product) => (
                  <div key={product.id} className="relative">
                    <ProductCard product={product} />
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-3 right-3 z-10 p-2 bg-background/90 backdrop-blur-md rounded-full hover:bg-destructive hover:text-destructive-foreground transition-colors"
                      aria-label="Remove from wishlist"
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/products"
                  className="text-sm font-medium hover:text-accent transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
