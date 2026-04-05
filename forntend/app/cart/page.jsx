"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react"

interface CartItem {
  id
  name
  price
  image
  size
  quantity
}

const initialCartItems = [
  {
    id: "1",
    name: "Silk Blend Kurta",
    price: 89,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
    size: "M",
    quantity: 1,
  },
  {
    id: "2",
    name: "Embroidered Saree",
    price: 245,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
    size: "Free Size",
    quantity: 1,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id, delta) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity.max(1, item.quantity + delta) }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + shipping

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-center">
            Shopping Cart
          </h1>
        </div>
      </section>

      {/* Cart Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty
              <p className="text-muted-foreground mb-8">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="border-b border-border pb-4 mb-6 hidden sm:grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground">
                  <div className="col-span-6">Product
                  <div className="col-span-2 text-center">Quantity
                  <div className="col-span-2 text-center">Price
                  <div className="col-span-2 text-right">Total
                </div>

                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-1 sm:grid-cols-12 gap-4 pb-6 border-b border-border"
                    >
                      {/* Product Info */}
                      <div className="sm:col-span-6 flex gap-4">
                        <div className="relative w-24 h-32 flex-shrink-0 bg-secondary overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <h3 className="font-medium">
                            <Link
                              href={`/products/${item.id}`}
                              className="hover:text-accent transition-colors"
                            >
                              {item.name}
                            </Link>
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Size: {item.size}
                          </p>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive mt-2 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="sm:col-span-2 flex items-center justify-center">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-10 text-center text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-secondary transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="sm:col-span-2 flex items-center justify-center text-sm">
                        ${item.price.toFixed(2)}
                      </div>

                      {/* Total */}
                      <div className="sm:col-span-2 flex items-center justify-end font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <Link
                    href="/products"
                    className="text-sm font-medium hover:text-accent transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-secondary/50 p-6 sm:p-8">
                  <h2 className="text-lg font-semibold mb-6">Order Summary
                  
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal
                      ${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping
                      {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    {shipping === 0 && (
                      <p className="text-xs text-muted-foreground">
                        You qualify for free shipping!
                      </p>
                    )}
                    <div className="pt-4 border-t border-border flex justify-between">
                      <span className="font-semibold">Total
                      <span className="font-semibold">${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors"
                  >
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <p className="mt-4 text-xs text-center text-muted-foreground">
                    Secure checkout powered by Stripe
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
