"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard, type Product } from "@/components/product-card"
import { ProductFilters } from "@/components/products/product-filters"
import { ChevronLeft, ChevronRight, Grid3X3, LayoutGrid, SlidersHorizontal, X } from "lucide-react"
import { cn } from "@/lib/utils"

const allProducts = [
  { id: "1", name: "Silk Blend Kurta", price: 89, originalPrice: 120, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80", category: "Men", isNew: true },
  { id: "2", name: "Embroidered Saree", price: 245, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80", category: "Women", isNew: true },
  { id: "3", name: "Linen Summer Shirt", price: 65, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80", category: "Men" },
  { id: "4", name: "Handwoven Shawl", price: 125, originalPrice: 160, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80", category: "Women", isSale: true },
  { id: "5", name: "Cotton Palazzo", price: 55, image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&q=80", category: "Women", isNew: true },
  { id: "6", name: "Traditional Panjabi", price: 95, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80", category: "Men" },
  { id: "7", name: "Geometric Print Dress", price: 145, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80", category: "Women", isNew: true },
  { id: "8", name: "Premium Cotton Shirt", price: 75, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80", category: "Men", isNew: true },
  { id: "9", name: "Floral Maxi Dress", price: 165, originalPrice: 195, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80", category: "Women", isNew: true, isSale: true },
  { id: "10", name: "Casual Linen Pants", price: 85, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80", category: "Men", isNew: true },
  { id: "11", name: "Elegant Blouse", price: 95, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80", category: "Women", isNew: true },
  { id: "12", name: "Tailored Blazer", price: 195, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", category: "Men", isNew: true },
  { id: "13", name: "Kids Summer Dress", price: 45, image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80", category: "Kids", isNew: true },
  { id: "14", name: "Boys Casual Shirt", price: 35, image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80", category: "Kids" },
  { id: "15", name: "Girls Party Frock", price: 65, originalPrice: 85, image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=600&q=80", category: "Kids", isSale: true },
  { id: "16", name: "Chiffon Evening Gown", price: 285, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80", category: "Women" },
]

const ITEMS_PER_PAGE = 12

export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 500] as [number, number],
    type: "all",
    sort: "featured",
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [gridView, setGridView] = useState("grid")
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts]

    // Filter by category
    if (filters.category !== "all") {
      filtered = filtered.filter(
        (p) => p.category.toLowerCase() === filters.category.toLowerCase()
      )
    }

    // Filter by price range
    filtered = filtered.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    )

    // Sort
    switch (filters.sort) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "new":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        break
    }

    return filtered
  }, [filters])

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
              Our Collection
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold">
              All Products
            </h1>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Discover our curated selection of premium fashion pieces
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Sidebar Filters */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <ProductFilters filters={filters} onFilterChange={setFilters} />
            </aside>

            {/* Mobile Filters Button */}
            <div className="lg:hidden flex items-center justify-between mb-4">
              <button
                onClick={() => setShowMobileFilters(true)}
                className="inline-flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setGridView("grid")}
                  className={cn(
                    "p-2 border transition-colors",
                    gridView === "grid"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:bg-secondary"
                  )}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setGridView("large")}
                  className={cn(
                    "p-2 border transition-colors",
                    gridView === "large"
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:bg-secondary"
                  )}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Mobile Filters Drawer */}
            {showMobileFilters && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div
                  className="absolute inset-0 bg-primary/50"
                  onClick={() => setShowMobileFilters(false)}
                />
                <div className="absolute inset-y-0 left-0 w-80 max-w-full bg-background p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">Filters
                    <button onClick={() => setShowMobileFilters(false)}>
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <ProductFilters filters={filters} onFilterChange={setFilters} />
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="hidden lg:flex items-center justify-between mb-8 pb-4 border-b border-border">
                <p className="text-sm text-muted-foreground">
                  Showing {paginatedProducts.length} of {filteredProducts.length} products
                </p>
                <div className="flex items-center gap-4">
                  <select
                    value={filters.sort}
                    onChange={(e) =>
                      setFilters({ ...filters, sort: e.target.value })
                    }
                    className="px-4 py-2 bg-transparent border border-border text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  >
                    <option value="featured">Featured
                    <option value="new">Newest
                    <option value="price-low">Price to High
                    <option value="price-high">Price to Low
                  </select>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setGridView("grid")}
                      className={cn(
                        "p-2 border transition-colors",
                        gridView === "grid"
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:bg-secondary"
                      )}
                    >
                      <Grid3X3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setGridView("large")}
                      className={cn(
                        "p-2 border transition-colors",
                        gridView === "large"
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:bg-secondary"
                      )}
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div
                className={cn(
                  "grid gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10",
                  gridView === "grid"
                    ? "grid-cols-2 md:grid-cols-3"
                    : "grid-cols-1 sm:grid-cols-2"
                )}
              >
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Empty State */}
              {paginatedProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">No products found matching your criteria.</p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="p-2 border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={cn(
                        "w-10 h-10 border transition-colors",
                        currentPage === i + 1
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:bg-secondary"
                      )}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
