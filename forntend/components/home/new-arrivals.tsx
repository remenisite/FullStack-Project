import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard, type Product } from "@/components/product-card"

const newArrivals: Product[] = [
  {
    id: "7",
    name: "Geometric Print Dress",
    price: 145.00,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
    category: "Women",
    isNew: true,
  },
  {
    id: "8",
    name: "Premium Cotton Shirt",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
    category: "Men",
    isNew: true,
  },
  {
    id: "9",
    name: "Floral Maxi Dress",
    price: 165.00,
    originalPrice: 195.00,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
    category: "Women",
    isNew: true,
    isSale: true,
  },
  {
    id: "10",
    name: "Casual Linen Pants",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    category: "Men",
    isNew: true,
  },
  {
    id: "11",
    name: "Elegant Blouse",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80",
    category: "Women",
    isNew: true,
  },
  {
    id: "12",
    name: "Tailored Blazer",
    price: 195.00,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    category: "Men",
    isNew: true,
  },
]

export function NewArrivals() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
              Just Arrived
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold">
              New Arrivals
            </h2>
          </div>
          <Link
            href="/products?sort=new"
            className="inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all group"
          >
            View All
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
          {newArrivals.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
