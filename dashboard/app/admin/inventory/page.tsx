"use client"

import { useState } from "react"
import { 
  Search, 
  AlertTriangle,
  Package,
  TrendingUp,
  TrendingDown,
  Filter,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Image as ImageIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const inventory = [
  {
    id: 1,
    name: "Silk Evening Dress",
    sku: "SED-001",
    category: "Dresses",
    currentStock: 24,
    minStock: 10,
    maxStock: 50,
    lastRestocked: "Mar 10, 2024",
    status: "in-stock",
    trend: "up",
    movement: "+8 this week",
  },
  {
    id: 2,
    name: "Cashmere Wool Coat",
    sku: "CWC-002",
    category: "Outerwear",
    currentStock: 12,
    minStock: 15,
    maxStock: 40,
    lastRestocked: "Feb 28, 2024",
    status: "low-stock",
    trend: "down",
    movement: "-5 this week",
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    sku: "LCB-003",
    category: "Accessories",
    currentStock: 45,
    minStock: 20,
    maxStock: 60,
    lastRestocked: "Mar 12, 2024",
    status: "in-stock",
    trend: "up",
    movement: "+12 this week",
  },
  {
    id: 4,
    name: "Italian Wool Blazer",
    sku: "IWB-004",
    category: "Outerwear",
    currentStock: 8,
    minStock: 10,
    maxStock: 30,
    lastRestocked: "Feb 20, 2024",
    status: "low-stock",
    trend: "down",
    movement: "-3 this week",
  },
  {
    id: 5,
    name: "Pearl Drop Earrings",
    sku: "PDE-005",
    category: "Jewelry",
    currentStock: 0,
    minStock: 15,
    maxStock: 50,
    lastRestocked: "Jan 15, 2024",
    status: "out-of-stock",
    trend: "down",
    movement: "-15 this week",
  },
  {
    id: 6,
    name: "Satin Blouse",
    sku: "SAB-006",
    category: "Tops",
    currentStock: 32,
    minStock: 15,
    maxStock: 45,
    lastRestocked: "Mar 08, 2024",
    status: "in-stock",
    trend: "up",
    movement: "+6 this week",
  },
  {
    id: 7,
    name: "Velvet Evening Clutch",
    sku: "VEC-007",
    category: "Accessories",
    currentStock: 18,
    minStock: 10,
    maxStock: 35,
    lastRestocked: "Mar 05, 2024",
    status: "in-stock",
    trend: "stable",
    movement: "0 this week",
  },
  {
    id: 8,
    name: "Linen Summer Dress",
    sku: "LSD-008",
    category: "Dresses",
    currentStock: 5,
    minStock: 12,
    maxStock: 40,
    lastRestocked: "Feb 10, 2024",
    status: "low-stock",
    trend: "down",
    movement: "-7 this week",
  },
]

const statusStyles = {
  "in-stock": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "low-stock": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "out-of-stock": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
}

const statusLabels = {
  "in-stock": "In Stock",
  "low-stock": "Low Stock",
  "out-of-stock": "Out of Stock",
}

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || item.status === statusFilter
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    return matchesSearch && matchesStatus && matchesCategory
  })

  const lowStockCount = inventory.filter(i => i.status === "low-stock").length
  const outOfStockCount = inventory.filter(i => i.status === "out-of-stock").length
  const totalItems = inventory.reduce((sum, i) => sum + i.currentStock, 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-semibold tracking-tight">Inventory</h1>
          <p className="mt-1 text-muted-foreground">
            Monitor and manage your stock levels.
          </p>
        </div>
        <Button variant="outline" className="gap-2 rounded-xl">
          <RefreshCw className="h-4 w-4" />
          Sync Inventory
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
              <Package className="h-6 w-6 text-gold" />
            </div>
            <div>
              <p className="text-2xl font-semibold">{totalItems}</p>
              <p className="text-sm text-muted-foreground">Total Items</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">{lowStockCount}</p>
              <p className="text-sm text-muted-foreground">Low Stock Items</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900/30">
              <Package className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">{outOfStockCount}</p>
              <p className="text-sm text-muted-foreground">Out of Stock</p>
            </div>
          </div>
        </div>
      </div>

      {/* Low Stock Alerts */}
      {(lowStockCount > 0 || outOfStockCount > 0) && (
        <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-900/10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            <div>
              <h3 className="font-semibold text-amber-800 dark:text-amber-300">Stock Alert</h3>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                {lowStockCount} items are running low and {outOfStockCount} items are out of stock. 
                Consider restocking soon to avoid order fulfillment issues.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-2xl bg-card p-4 shadow-sm sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by name or SKU..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 rounded-xl bg-secondary/50 pl-10"
          />
        </div>
        <div className="flex gap-3">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[150px] rounded-xl">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="in-stock">In Stock</SelectItem>
              <SelectItem value="low-stock">Low Stock</SelectItem>
              <SelectItem value="out-of-stock">Out of Stock</SelectItem>
            </SelectContent>
          </Select>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[150px] rounded-xl">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Dresses">Dresses</SelectItem>
              <SelectItem value="Outerwear">Outerwear</SelectItem>
              <SelectItem value="Accessories">Accessories</SelectItem>
              <SelectItem value="Tops">Tops</SelectItem>
              <SelectItem value="Jewelry">Jewelry</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="rounded-2xl bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  SKU
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Stock Level
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Trend
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Last Restocked
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredInventory.map((item) => {
                const stockPercentage = (item.currentStock / item.maxStock) * 100

                return (
                  <tr
                    key={item.id}
                    className="group transition-colors hover:bg-muted/50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-secondary">
                          <ImageIcon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <p className="text-xs text-muted-foreground">{item.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-mono text-sm text-muted-foreground">{item.sku}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="w-32 space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium">{item.currentStock}</span>
                          <span className="text-muted-foreground">/ {item.maxStock}</span>
                        </div>
                        <Progress 
                          value={stockPercentage} 
                          className={cn(
                            "h-2",
                            item.status === "out-of-stock" && "[&>div]:bg-red-500",
                            item.status === "low-stock" && "[&>div]:bg-amber-500",
                            item.status === "in-stock" && "[&>div]:bg-emerald-500"
                          )}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        variant="secondary"
                        className={cn(
                          "text-xs",
                          statusStyles[item.status as keyof typeof statusStyles]
                        )}
                      >
                        {statusLabels[item.status as keyof typeof statusLabels]}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {item.trend === "up" && (
                          <TrendingUp className="h-4 w-4 text-emerald-500" />
                        )}
                        {item.trend === "down" && (
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        )}
                        {item.trend === "stable" && (
                          <div className="h-4 w-4 rounded-full bg-muted-foreground/20" />
                        )}
                        <span className={cn(
                          "text-sm",
                          item.trend === "up" && "text-emerald-600",
                          item.trend === "down" && "text-red-600",
                          item.trend === "stable" && "text-muted-foreground"
                        )}>
                          {item.movement}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm text-muted-foreground">
                      {item.lastRestocked}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-border px-6 py-4">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium">{filteredInventory.length}</span> of{" "}
            <span className="font-medium">{inventory.length}</span> items
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="h-8 min-w-8 rounded-lg bg-gold text-gold-foreground hover:bg-gold/90">
              1
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
