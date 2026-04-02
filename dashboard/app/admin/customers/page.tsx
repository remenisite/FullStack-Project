"use client"

import { useState } from "react"
import { 
  Search, 
  MoreHorizontal, 
  Eye,
  Mail,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Calendar,
  MapPin,
  Phone
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

const customers = [
  {
    id: 1,
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    avatar: "",
    phone: "+1 (555) 123-4567",
    address: "123 Fashion Ave, New York, NY 10001",
    orders: 12,
    totalSpent: "$8,450.00",
    joinDate: "Jan 15, 2024",
    status: "vip",
    recentOrders: [
      { id: "ORD-001", date: "Mar 15, 2024", amount: "$1,719.00", status: "delivered" },
      { id: "ORD-089", date: "Feb 28, 2024", amount: "$890.00", status: "delivered" },
    ],
  },
  {
    id: 2,
    name: "James Chen",
    email: "james.chen@email.com",
    avatar: "",
    phone: "+1 (555) 234-5678",
    address: "456 Style Blvd, Los Angeles, CA 90001",
    orders: 8,
    totalSpent: "$5,240.00",
    joinDate: "Feb 02, 2024",
    status: "active",
    recentOrders: [
      { id: "ORD-002", date: "Mar 15, 2024", amount: "$2,450.00", status: "processing" },
    ],
  },
  {
    id: 3,
    name: "Sofia Martinez",
    email: "sofia.martinez@email.com",
    avatar: "",
    phone: "+1 (555) 345-6789",
    address: "789 Elegance St, Miami, FL 33101",
    orders: 15,
    totalSpent: "$12,680.00",
    joinDate: "Nov 20, 2023",
    status: "vip",
    recentOrders: [
      { id: "ORD-003", date: "Mar 14, 2024", amount: "$890.00", status: "shipped" },
      { id: "ORD-078", date: "Feb 10, 2024", amount: "$2,100.00", status: "delivered" },
    ],
  },
  {
    id: 4,
    name: "Oliver Brown",
    email: "oliver.brown@email.com",
    avatar: "",
    phone: "+1 (555) 456-7890",
    address: "321 Luxe Lane, Chicago, IL 60601",
    orders: 3,
    totalSpent: "$3,450.00",
    joinDate: "Mar 01, 2024",
    status: "new",
    recentOrders: [
      { id: "ORD-004", date: "Mar 14, 2024", amount: "$2,330.00", status: "pending" },
    ],
  },
  {
    id: 5,
    name: "Ava Johnson",
    email: "ava.johnson@email.com",
    avatar: "",
    phone: "+1 (555) 567-8901",
    address: "654 Couture Ct, San Francisco, CA 94101",
    orders: 6,
    totalSpent: "$4,120.00",
    joinDate: "Jan 28, 2024",
    status: "active",
    recentOrders: [
      { id: "ORD-005", date: "Mar 13, 2024", amount: "$680.00", status: "delivered" },
    ],
  },
  {
    id: 6,
    name: "Liam Davis",
    email: "liam.davis@email.com",
    avatar: "",
    phone: "+1 (555) 678-9012",
    address: "987 Trend Ave, Seattle, WA 98101",
    orders: 4,
    totalSpent: "$2,890.00",
    joinDate: "Feb 15, 2024",
    status: "active",
    recentOrders: [
      { id: "ORD-006", date: "Mar 13, 2024", amount: "$720.00", status: "shipped" },
    ],
  },
  {
    id: 7,
    name: "Isabella Garcia",
    email: "isabella.garcia@email.com",
    avatar: "",
    phone: "+1 (555) 789-0123",
    address: "246 Vogue Rd, Boston, MA 02101",
    orders: 9,
    totalSpent: "$7,560.00",
    joinDate: "Dec 10, 2023",
    status: "vip",
    recentOrders: [
      { id: "ORD-007", date: "Mar 12, 2024", amount: "$2,189.00", status: "processing" },
    ],
  },
  {
    id: 8,
    name: "Noah Miller",
    email: "noah.miller@email.com",
    avatar: "",
    phone: "+1 (555) 890-1234",
    address: "135 Chic St, Denver, CO 80201",
    orders: 2,
    totalSpent: "$3,170.00",
    joinDate: "Mar 05, 2024",
    status: "new",
    recentOrders: [
      { id: "ORD-008", date: "Mar 12, 2024", amount: "$2,450.00", status: "pending" },
    ],
  },
]

const statusStyles = {
  vip: "bg-gold/20 text-gold",
  active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  new: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
}

const orderStatusStyles = {
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  processing: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  shipped: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  delivered: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
}

type CustomerType = typeof customers[0]

export default function CustomersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerType | null>(null)

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">Customers</h1>
        <p className="mt-1 text-muted-foreground">
          View and manage your customer base.
        </p>
      </div>

      {/* Search */}
      <div className="rounded-2xl bg-card p-4 shadow-sm">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search customers by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 rounded-xl bg-secondary/50 pl-10"
          />
        </div>
      </div>

      {/* Customers Table */}
      <div className="rounded-2xl bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Orders
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Total Spent
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Join Date
                </th>
                <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="group transition-colors hover:bg-muted/50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10 border border-border">
                        <AvatarImage src={customer.avatar} />
                        <AvatarFallback className="bg-secondary text-sm">
                          {customer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{customer.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {customer.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Badge
                      variant="secondary"
                      className={cn(
                        "uppercase text-xs",
                        statusStyles[customer.status as keyof typeof statusStyles]
                      )}
                    >
                      {customer.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="font-medium">{customer.orders}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="font-medium text-gold">{customer.totalSpent}</span>
                  </td>
                  <td className="px-6 py-4 text-right text-sm text-muted-foreground">
                    {customer.joinDate}
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
                          onClick={() => setSelectedCustomer(customer)}
                        >
                          <Eye className="h-4 w-4" />
                          View Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem className="gap-2">
                          <Mail className="h-4 w-4" />
                          Send Email
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
            Showing <span className="font-medium">{filteredCustomers.length}</span> of{" "}
            <span className="font-medium">{customers.length}</span> customers
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

      {/* Customer Profile Modal */}
      <Dialog open={!!selectedCustomer} onOpenChange={() => setSelectedCustomer(null)}>
        <DialogContent className="max-w-2xl rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Customer Profile</DialogTitle>
          </DialogHeader>
          {selectedCustomer && (
            <div className="space-y-6 py-4">
              {/* Customer Info */}
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 border-2 border-gold/20">
                  <AvatarImage src={selectedCustomer.avatar} />
                  <AvatarFallback className="bg-gold text-gold-foreground text-lg">
                    {selectedCustomer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-semibold">{selectedCustomer.name}</h2>
                    <Badge
                      variant="secondary"
                      className={cn(
                        "uppercase text-xs",
                        statusStyles[selectedCustomer.status as keyof typeof statusStyles]
                      )}
                    >
                      {selectedCustomer.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{selectedCustomer.email}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl bg-muted/50 p-4 text-center">
                  <p className="text-2xl font-semibold">{selectedCustomer.orders}</p>
                  <p className="text-sm text-muted-foreground">Total Orders</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-4 text-center">
                  <p className="text-2xl font-semibold text-gold">{selectedCustomer.totalSpent}</p>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                </div>
                <div className="rounded-xl bg-muted/50 p-4 text-center">
                  <p className="text-2xl font-semibold">{selectedCustomer.joinDate.split(",")[0]}</p>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-4">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm font-medium">{selectedCustomer.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl bg-muted/50 p-4">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Join Date</p>
                    <p className="text-sm font-medium">{selectedCustomer.joinDate}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-muted/50 p-4">
                <MapPin className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Address</p>
                  <p className="text-sm font-medium">{selectedCustomer.address}</p>
                </div>
              </div>

              <Separator />

              {/* Recent Orders */}
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  <ShoppingBag className="h-4 w-4" />
                  Recent Orders
                </h3>
                <div className="space-y-3">
                  {selectedCustomer.recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between rounded-xl bg-muted/50 p-4"
                    >
                      <div>
                        <p className="font-medium">{order.id}</p>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="secondary"
                          className={cn(
                            "capitalize text-xs",
                            orderStatusStyles[order.status as keyof typeof orderStatusStyles]
                          )}
                        >
                          {order.status}
                        </Badge>
                        <span className="font-medium">{order.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
