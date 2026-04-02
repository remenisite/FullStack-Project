"use client"

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const orders = [
  {
    id: "ORD-001",
    customer: "Emma Wilson",
    email: "emma@email.com",
    avatar: "",
    status: "delivered",
    amount: "$459.00",
    date: "Mar 15, 2024",
  },
  {
    id: "ORD-002",
    customer: "James Chen",
    email: "james@email.com",
    avatar: "",
    status: "processing",
    amount: "$1,250.00",
    date: "Mar 15, 2024",
  },
  {
    id: "ORD-003",
    customer: "Sofia Martinez",
    email: "sofia@email.com",
    avatar: "",
    status: "shipped",
    amount: "$890.00",
    date: "Mar 14, 2024",
  },
  {
    id: "ORD-004",
    customer: "Oliver Brown",
    email: "oliver@email.com",
    avatar: "",
    status: "pending",
    amount: "$2,100.00",
    date: "Mar 14, 2024",
  },
  {
    id: "ORD-005",
    customer: "Ava Johnson",
    email: "ava@email.com",
    avatar: "",
    status: "delivered",
    amount: "$675.00",
    date: "Mar 13, 2024",
  },
]

const statusStyles = {
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  processing: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  shipped: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  delivered: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
}

export function RecentOrders() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-serif text-lg font-semibold">Recent Orders</h2>
        <a
          href="/admin/orders"
          className="text-sm font-medium text-gold transition-colors hover:text-gold/80"
        >
          View all
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Order
              </th>
              <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Customer
              </th>
              <th className="pb-3 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Status
              </th>
              <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Amount
              </th>
              <th className="pb-3 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="group transition-colors hover:bg-muted/50"
              >
                <td className="py-4">
                  <span className="font-medium">{order.id}</span>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8 border border-border">
                      <AvatarImage src={order.avatar} />
                      <AvatarFallback className="bg-secondary text-xs">
                        {order.customer
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{order.customer}</p>
                      <p className="text-xs text-muted-foreground">
                        {order.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <Badge
                    variant="secondary"
                    className={cn(
                      "capitalize",
                      statusStyles[order.status as keyof typeof statusStyles]
                    )}
                  >
                    {order.status}
                  </Badge>
                </td>
                <td className="py-4 text-right font-medium">{order.amount}</td>
                <td className="py-4 text-right text-sm text-muted-foreground">
                  {order.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
