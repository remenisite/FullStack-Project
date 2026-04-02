"use client"

import { useState } from "react"
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Truck,
  ChevronLeft,
  ChevronRight,
  X,
  Package,
  MapPin,
  CreditCard
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const orders = [
  {
    id: "ORD-001",
    customer: {
      name: "Emma Wilson",
      email: "emma@email.com",
      avatar: "",
      phone: "+1 (555) 123-4567",
      address: "123 Fashion Ave, New York, NY 10001",
    },
    items: [
      { name: "Silk Evening Dress", quantity: 1, price: "$1,299.00" },
      { name: "Pearl Drop Earrings", quantity: 1, price: "$420.00" },
    ],
    status: "delivered",
    amount: "$1,719.00",
    date: "Mar 15, 2024",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-002",
    customer: {
      name: "James Chen",
      email: "james@email.com",
      avatar: "",
      phone: "+1 (555) 234-5678",
      address: "456 Style Blvd, Los Angeles, CA 90001",
    },
    items: [
      { name: "Cashmere Wool Coat", quantity: 1, price: "$2,450.00" },
    ],
    status: "processing",
    amount: "$2,450.00",
    date: "Mar 15, 2024",
    paymentMethod: "PayPal",
  },
  {
    id: "ORD-003",
    customer: {
      name: "Sofia Martinez",
      email: "sofia@email.com",
      avatar: "",
      phone: "+1 (555) 345-6789",
      address: "789 Elegance St, Miami, FL 33101",
    },
    items: [
      { name: "Leather Crossbody Bag", quantity: 1, price: "$890.00" },
    ],
    status: "shipped",
    amount: "$890.00",
    date: "Mar 14, 2024",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-004",
    customer: {
      name: "Oliver Brown",
      email: "oliver@email.com",
      avatar: "",
      phone: "+1 (555) 456-7890",
      address: "321 Luxe Lane, Chicago, IL 60601",
    },
    items: [
      { name: "Italian Wool Blazer", quantity: 1, price: "$1,750.00" },
      { name: "Satin Blouse", quantity: 1, price: "$580.00" },
    ],
    status: "pending",
    amount: "$2,330.00",
    date: "Mar 14, 2024",
    paymentMethod: "Apple Pay",
  },
  {
    id: "ORD-005",
    customer: {
      name: "Ava Johnson",
      email: "ava@email.com",
      avatar: "",
      phone: "+1 (555) 567-8901",
      address: "654 Couture Ct, San Francisco, CA 94101",
    },
    items: [
      { name: "Velvet Evening Clutch", quantity: 2, price: "$680.00" },
    ],
    status: "delivered",
    amount: "$680.00",
    date: "Mar 13, 2024",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-006",
    customer: {
      name: "Liam Davis",
      email: "liam@email.com",
      avatar: "",
      phone: "+1 (555) 678-9012",
      address: "987 Trend Ave, Seattle, WA 98101",
    },
    items: [
      { name: "Linen Summer Dress", quantity: 1, price: "$720.00" },
    ],
    status: "shipped",
    amount: "$720.00",
    date: "Mar 13, 2024",
    paymentMethod: "PayPal",
  },
  {
    id: "ORD-007",
    customer: {
      name: "Isabella Garcia",
      email: "isabella@email.com",
      avatar: "",
      phone: "+1 (555) 789-0123",
      address: "246 Vogue Rd, Boston, MA 02101",
    },
    items: [
      { name: "Silk Evening Dress", quantity: 1, price: "$1,299.00" },
      { name: "Leather Crossbody Bag", quantity: 1, price: "$890.00" },
    ],
    status: "processing",
    amount: "$2,189.00",
    date: "Mar 12, 2024",
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-008",
    customer: {
      name: "Noah Miller",
      email: "noah@email.com",
      avatar: "",
      phone: "+1 (555) 890-1234",
      address: "135 Chic St, Denver, CO 80201",
    },
    items: [
      { name: "Cashmere Wool Coat", quantity: 1, price: "$2,450.00" },
    ],
    status: "pending",
    amount: "$2,450.00",
    date: "Mar 12, 2024",
    paymentMethod: "Apple Pay",
  },
]

const statusStyles = {
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  processing: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  shipped: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  delivered: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
}

type OrderType = typeof orders[0]

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<OrderType | null>(null)

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = 
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customer.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">Orders</h1>
        <p className="mt-1 text-muted-foreground">
          Track and manage customer orders.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-2xl bg-card p-4 shadow-sm sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search orders or customers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 rounded-xl bg-secondary/50 pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[150px] rounded-xl">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="shipped">Shipped</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <div className="rounded-2xl bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Order ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Amount
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Date
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="group transition-colors hover:bg-muted/50"
                >
                  <td className="px-6 py-4">
                    <span className="font-medium">{order.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8 border border-border">
                        <AvatarImage src={order.customer.avatar} />
                        <AvatarFallback className="bg-secondary text-xs">
                          {order.customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{order.customer.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {order.customer.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
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
                  <td className="px-6 py-4 text-right font-medium">{order.amount}</td>
                  <td className="px-6 py-4 text-right text-sm text-muted-foreground">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 text-right">
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
                        <DropdownMenuItem 
                          className="gap-2"
                          onClick={() => setSelectedOrder(order)}
                        >
                          <Eye className="h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Truck className="h-4 w-4" />
                          Update Status
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-border px-6 py-4">
          <p className="text-sm text-muted-foreground">
            Showing <span className="font-medium">{filteredOrders.length}</span> of{" "}
            <span className="font-medium">{orders.length}</span> orders
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="h-8 min-w-8 rounded-lg bg-gold text-gold-foreground hover:bg-gold/90">
              1
            </Button>
            <Button variant="outline" size="sm" className="h-8 min-w-8 rounded-lg">
              2
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 rounded-lg">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Order Details Modal */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-2xl rounded-2xl">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle className="font-serif text-xl">
                Order {selectedOrder?.id}
              </DialogTitle>
              <Badge
                variant="secondary"
                className={cn(
                  "capitalize",
                  selectedOrder && statusStyles[selectedOrder.status as keyof typeof statusStyles]
                )}
              >
                {selectedOrder?.status}
              </Badge>
            </div>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-6 py-4">
              {/* Customer Info */}
              <div className="rounded-xl bg-muted/50 p-4">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Customer Information
                </h3>
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 border-2 border-gold/20">
                    <AvatarImage src={selectedOrder.customer.avatar} />
                    <AvatarFallback className="bg-gold text-gold-foreground">
                      {selectedOrder.customer.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="font-medium">{selectedOrder.customer.name}</p>
                    <p className="text-sm text-muted-foreground">{selectedOrder.customer.email}</p>
                    <p className="text-sm text-muted-foreground">{selectedOrder.customer.phone}</p>
                  </div>
                </div>
              </div>

              {/* Shipping & Payment */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-muted/50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    Shipping Address
                  </div>
                  <p className="text-sm">{selectedOrder.customer.address}</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    <CreditCard className="h-4 w-4" />
                    Payment Method
                  </div>
                  <p className="text-sm">{selectedOrder.paymentMethod}</p>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  <Package className="h-4 w-4" />
                  Order Items
                </h3>
                <div className="space-y-3">
                  {selectedOrder.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-xl bg-muted/50 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                          <Package className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Total */}
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Total</span>
                <span className="font-serif text-2xl font-semibold text-gold">
                  {selectedOrder.amount}
                </span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
