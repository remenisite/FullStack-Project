"use client"

import { cn } from "@/lib/utils"

interface Filters {
  category: string
  priceRange: [number, number]
  type: string
  sort: string
}

interface ProductFiltersProps {
  filters: Filters
  onFilterChange: (filters: Filters) => void
}

const categories = [
  { id: "all", name: "All Categories" },
  { id: "men", name: "Men" },
  { id: "women", name: "Women" },
  { id: "kids", name: "Kids" },
]

const types = [
  { id: "all", name: "All Types" },
  { id: "shirt", name: "Shirts" },
  { id: "pants", name: "Pants" },
  { id: "dress", name: "Dresses" },
  { id: "kurta", name: "Kurtas" },
  { id: "saree", name: "Sarees" },
  { id: "panjabi", name: "Panjabi" },
]

const priceRanges = [
  { min: 0, max: 500, label: "All Prices" },
  { min: 0, max: 50, label: "Under $50" },
  { min: 50, max: 100, label: "$50 - $100" },
  { min: 100, max: 200, label: "$100 - $200" },
  { min: 200, max: 500, label: "$200+" },
]

export function ProductFilters({ filters, onFilterChange }: ProductFiltersProps) {
  return (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() =>
                onFilterChange({ ...filters, category: category.id })
              }
              className={cn(
                "block w-full text-left px-3 py-2 text-sm transition-colors",
                filters.category === category.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
          Price Range
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() =>
                onFilterChange({
                  ...filters,
                  priceRange: [range.min, range.max],
                })
              }
              className={cn(
                "block w-full text-left px-3 py-2 text-sm transition-colors",
                filters.priceRange[0] === range.min &&
                  filters.priceRange[1] === range.max
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Type */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
          Type
        </h3>
        <div className="space-y-2">
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => onFilterChange({ ...filters, type: type.id })}
              className={cn(
                "block w-full text-left px-3 py-2 text-sm transition-colors",
                filters.type === type.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              )}
            >
              {type.name}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() =>
          onFilterChange({
            category: "all",
            priceRange: [0, 500],
            type: "all",
            sort: "featured",
          })
        }
        className="w-full px-4 py-3 border border-border text-sm font-medium hover:bg-secondary transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  )
}
