import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PromoBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative bg-primary overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Content */}
            <div className="relative z-10 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-sm font-medium tracking-[0.3em] text-primary-foreground/70 uppercase">
                Limited Time Offer
              </p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground leading-tight">
                Summer Sale
                <br />
                <span className="text-accent">Up to 50% Off</span>
              </h2>
              <p className="mt-6 text-lg text-primary-foreground/80 max-w-md">
                Refresh your wardrobe with our summer collection. 
                Premium quality at unbeatable prices.
              </p>
              <div className="mt-8">
                <Link
                  href="/products?sale=true"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-medium tracking-wide hover:bg-primary-foreground/90 transition-colors"
                >
                  Shop the Sale
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative aspect-square lg:aspect-auto">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
                alt="Summer Sale"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
