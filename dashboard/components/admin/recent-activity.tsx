"use client"

import { cn } from "@/lib/utils"
import { Package, ShoppingCart, Star, Users, CreditCard } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "order",
    message: "New order received",
    detail: "Order #1234 - Silk Evening Dress",
    time: "2 min ago",
    icon: ShoppingCart,
    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: 2,
    type: "product",
    message: "Product stock updated",
    detail: "Cashmere Coat - Added 50 units",
    time: "15 min ago",
    icon: Package,
    iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    id: 3,
    type: "review",
    message: "New 5-star review",
    detail: "Leather Handbag - by Sarah M.",
    time: "1 hour ago",
    icon: Star,
    iconBg: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    id: 4,
    type: "customer",
    message: "New customer registered",
    detail: "Michael Thompson joined",
    time: "2 hours ago",
    icon: Users,
    iconBg: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
  },
  {
    id: 5,
    type: "payment",
    message: "Payment received",
    detail: "Order #1230 - $890.00",
    time: "3 hours ago",
    icon: CreditCard,
    iconBg: "bg-gold/20 text-gold dark:bg-gold/10",
  },
]

export function RecentActivity() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-serif text-lg font-semibold">Recent Activity</h2>
        <span className="text-xs text-muted-foreground">Today</span>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="group flex items-start gap-4 rounded-xl p-2 transition-colors hover:bg-muted/50"
          >
            <div
              className={cn(
                "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110",
                activity.iconBg
              )}
            >
              <activity.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium">{activity.message}</p>
              <p className="text-xs text-muted-foreground">{activity.detail}</p>
            </div>
            <span className="text-xs text-muted-foreground">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
