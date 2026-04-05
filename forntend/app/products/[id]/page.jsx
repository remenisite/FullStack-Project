"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard, type Product } from "@/components/product-card"
import { Heart, Minus, Plus, ShoppingBag, Truck, RefreshCw, Shield, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Mock product data
const productsstring, Product & { 
  images[]
  description
  details[]
  sizes[]
}> = {
  "1": {
    id: "1",
    name: "Silk Blend Kurta",
    price: 89,
    originalPrice: 120,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
    ],
    category: "Men",
    isNew: true,
    description: "Experience the perfect blend of traditional elegance and modern comfort with our premium Silk Blend Kurta. Crafted from the finest silk-cotton blend, this kurta offers a luxurious feel while ensuring breathability for all-day comfort.",
    details: [
      "Premium silk-cotton blend fabric",
      "Traditional hand embroidery",
      "Comfortable regular fit",
      "Full sleeves with cuff buttons",
      "Mandarin collar",
      "Machine washable",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
}

const relatedProducts = [
  { id: "6", name: "Traditional Panjabi", price: 95, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80", category: "Men" },
  { id: "8", name: "Premium Cotton Shirt", price: 75, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80", category: "Men", isNew: true },
  { id: "3", name: "Linen Summer Shirt", price: 65, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80", category: "Men" },
  { id: "12", name: "Tailored Blazer", price: 195, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", category: "Men", isNew: true },
]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  
  // Default product for demo purposes
  const product = products[productId] || products["1"]
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="flex flex-col-reverse sm:flex-row gap-4">
              {/* Thumbnails */}
              <div className="flex sm:flex-col gap-2 sm:gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "relative w-20 h-24 overflow-hidden border-2 transition-colors",
                      selectedImage === index
                        ? "border-primary"
                        : "border-transparent hover:border-border"
                    )}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 relative aspect-[3/4] overflow-hidden bg-secondary">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.isNew && (
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground">
                    NEW
                  </span>
                )}
                {discount > 0 && (
                  <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-accent text-accent-foreground">
                    -{discount}%
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <p className="text-sm text-muted-foreground uppercase tracking-wider">
                {product.category}
              </p>
              <h1 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold">
                {product.name}
              </h1>
              
              {/* Price */}
              <div className="mt-4 flex items-center gap-3">
                <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="mt-6 text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Select Size
                  <button className="text-sm text-muted-foreground hover:text-foreground underline">
                    Size Guide
                  </button>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-12 h-12 border text-sm font-medium transition-colors",
                        selectedSize === size
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:border-foreground"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8">
                <h3 className="text-sm font-medium">Quantity
                <div className="mt-3 flex items-center gap-4">
                  <div className="flex items-center border border-border">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors">
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 px-6 py-4 border font-medium tracking-wide transition-colors",
                    isWishlisted
                      ? "bg-accent text-accent-foreground border-accent"
                      : "border-border hover:bg-secondary"
                  )}
                >
                  <Heart className={cn("h-5 w-5", isWishlisted && "fill-current")} />
                </button>
              </div>

              {/* Features */}
              <div className="mt-10 pt-10 border-t border-border grid grid-cols-3 gap-4">
                <div className="text-center">
                  <Truck className="h-6 w-6 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-xs text-muted-foreground">Free Shipping
                </div>
                <div className="text-center">
                  <RefreshCw className="h-6 w-6 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-xs text-muted-foreground">Easy Returns
                </div>
                <div className="text-center">
                  <Shield className="h-6 w-6 mx-auto text-muted-foreground" />
                  <p className="mt-2 text-xs text-muted-foreground">Secure Payment
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-semibold mb-6">Product Details
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.details.map((detail, index) => (
              <li key={index} className="flex items-center gap-2 text-muted-foreground">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold mb-8">You May Also Like
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
