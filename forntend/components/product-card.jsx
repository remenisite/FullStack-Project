"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingBag, Eye } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface Product {
  id
  name
  price
  originalPrice?
  image
  category
  isNew?
  isSale?
}

interface ProductCardProps {
  product
}

export function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground">
              NEW
            </span>
          )}
          {product.isSale && discount > 0 && (
            <span className="px-2 py-1 text-xs font-medium bg-accent text-accent-foreground">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div
          className={cn(
            "absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 transition-all duration-300",
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={cn(
              "p-3 rounded-full backdrop-blur-md transition-all duration-200",
              isWishlisted
                ? "bg-accent text-accent-foreground"
                : "bg-background/90 hover:bg-background text-foreground"
            )}
            aria-label="Add to wishlist"
          >
            <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
          </button>
          <button
            className="p-3 rounded-full bg-background/90 hover:bg-background backdrop-blur-md text-foreground transition-all duration-200"
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
          <Link
            href={`/products/${product.id}`}
            className="p-3 rounded-full bg-background/90 hover:bg-background backdrop-blur-md text-foreground transition-all duration-200"
            aria-label="View details"
          >
            <Eye className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="mt-1 font-medium text-foreground">
          <Link href={`/products/${product.id}`} className="hover:text-accent transition-colors">
            {product.name}
          </Link>
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
