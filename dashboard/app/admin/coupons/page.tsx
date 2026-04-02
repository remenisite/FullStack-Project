"use client"

import { useState } from "react"
import { 
  Plus, 
  MoreHorizontal, 
  Pencil, 
  Trash2,
  Ticket,
  Copy,
  Calendar,
  Percent,
  DollarSign
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"

const coupons = [
  {
    id: 1,
    code: "WELCOME20",
    type: "percentage",
    value: 20,
    minPurchase: "$100.00",
    maxUses: 500,
    usedCount: 234,
    expiryDate: "Apr 30, 2024",
    status: "active",
  },
  {
    id: 2,
    code: "LUXURY50",
    type: "fixed",
    value: 50,
    minPurchase: "$250.00",
    maxUses: 200,
    usedCount: 89,
    expiryDate: "May 15, 2024",
    status: "active",
  },
  {
    id: 3,
    code: "SPRING25",
    type: "percentage",
    value: 25,
    minPurchase: "$150.00",
    maxUses: 300,
    usedCount: 156,
    expiryDate: "Apr 20, 2024",
    status: "active",
  },
  {
    id: 4,
    code: "VIP100",
    type: "fixed",
    value: 100,
    minPurchase: "$500.00",
    maxUses: 50,
    usedCount: 50,
    expiryDate: "Mar 31, 2024",
    status: "expired",
  },
  {
    id: 5,
    code: "FREESHIP",
    type: "shipping",
    value: 0,
    minPurchase: "$75.00",
    maxUses: 1000,
    usedCount: 567,
    expiryDate: "Jun 30, 2024",
    status: "active",
  },
  {
    id: 6,
    code: "SUMMER30",
    type: "percentage",
    value: 30,
    minPurchase: "$200.00",
    maxUses: 400,
    usedCount: 0,
    expiryDate: "Jul 31, 2024",
    status: "scheduled",
  },
]

const statusStyles = {
  active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  expired: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  scheduled: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
}

const typeIcons = {
  percentage: Percent,
  fixed: DollarSign,
  shipping: Ticket,
}

export default function CouponsPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [discountType, setDiscountType] = useState("percentage")

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-semibold tracking-tight">Coupons</h1>
          <p className="mt-1 text-muted-foreground">
            Create and manage discount coupons.
          </p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 rounded-xl bg-gold text-gold-foreground hover:bg-gold/90">
              <Plus className="h-4 w-4" />
              Create Coupon
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-2xl">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl">Create Coupon</DialogTitle>
              <DialogDescription>
                Set up a new discount coupon for your customers.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="code">Coupon Code</Label>
                <Input 
                  id="code" 
                  placeholder="SUMMER20" 
                  className="rounded-xl uppercase"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Discount Type</Label>
                  <Select value={discountType} onValueChange={setDiscountType}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Percentage (%)</SelectItem>
                      <SelectItem value="fixed">Fixed Amount ($)</SelectItem>
                      <SelectItem value="shipping">Free Shipping</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {discountType !== "shipping" && (
                  <div className="space-y-2">
                    <Label htmlFor="value">
                      {discountType === "percentage" ? "Discount (%)" : "Discount Amount"}
                    </Label>
                    <Input 
                      id="value" 
                      type="number"
                      placeholder={discountType === "percentage" ? "20" : "50"} 
                      className="rounded-xl"
                    />
                  </div>
                )}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="minPurchase">Minimum Purchase</Label>
                  <Input 
                    id="minPurchase" 
                    placeholder="$100.00" 
                    className="rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxUses">Maximum Uses</Label>
                  <Input 
                    id="maxUses" 
                    type="number"
                    placeholder="500" 
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input 
                  id="expiry" 
                  type="date"
                  className="rounded-xl"
                />
              </div>
              <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
                <div>
                  <p className="font-medium">Active Immediately</p>
                  <p className="text-sm text-muted-foreground">Enable coupon right away</p>
                </div>
                <Switch />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" className="rounded-xl" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="rounded-xl bg-gold text-gold-foreground hover:bg-gold/90">
                Create Coupon
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Coupons Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coupons.map((coupon) => {
          const TypeIcon = typeIcons[coupon.type as keyof typeof typeIcons]
          const usagePercentage = (coupon.usedCount / coupon.maxUses) * 100

          return (
            <div
              key={coupon.id}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
                    <TypeIcon className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-semibold">{coupon.code}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6 rounded-md"
                        onClick={() => copyToClipboard(coupon.code)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <Badge
                      variant="secondary"
                      className={cn(
                        "mt-1 capitalize text-xs",
                        statusStyles[coupon.status as keyof typeof statusStyles]
                      )}
                    >
                      {coupon.status}
                    </Badge>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-lg opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-xl">
                    <DropdownMenuItem className="gap-2">
                      <Pencil className="h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-destructive">
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Discount Value */}
              <div className="mt-4">
                <span className="font-serif text-3xl font-semibold text-gold">
                  {coupon.type === "percentage" 
                    ? `${coupon.value}%` 
                    : coupon.type === "fixed" 
                    ? `$${coupon.value}` 
                    : "Free"}
                </span>
                <span className="ml-2 text-sm text-muted-foreground">
                  {coupon.type === "shipping" ? "Shipping" : "Off"}
                </span>
              </div>

              {/* Details */}
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Min. Purchase</span>
                  <span className="font-medium text-foreground">{coupon.minPurchase}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground">
                  <span>Usage</span>
                  <span className="font-medium text-foreground">
                    {coupon.usedCount} / {coupon.maxUses}
                  </span>
                </div>
              </div>

              {/* Usage Progress */}
              <div className="mt-3">
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gold transition-all duration-500"
                    style={{ width: `${Math.min(usagePercentage, 100)}%` }}
                  />
                </div>
              </div>

              {/* Expiry */}
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Expires {coupon.expiryDate}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
