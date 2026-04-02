"use client"

import { useState } from "react"
import { 
  Search, 
  Filter,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  ArrowDownLeft,
  Building2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const transactions = [
  {
    id: "TXN-001",
    orderId: "ORD-001",
    customer: "Emma Wilson",
    amount: "$1,719.00",
    type: "payment",
    method: "credit_card",
    cardLast4: "4242",
    status: "completed",
    date: "Mar 15, 2024",
    time: "2:34 PM",
  },
  {
    id: "TXN-002",
    orderId: "ORD-002",
    customer: "James Chen",
    amount: "$2,450.00",
    type: "payment",
    method: "paypal",
    cardLast4: null,
    status: "completed",
    date: "Mar 15, 2024",
    time: "11:22 AM",
  },
  {
    id: "TXN-003",
    orderId: "ORD-003",
    customer: "Sofia Martinez",
    amount: "$890.00",
    type: "payment",
    method: "credit_card",
    cardLast4: "1234",
    status: "completed",
    date: "Mar 14, 2024",
    time: "4:15 PM",
  },
  {
    id: "TXN-004",
    orderId: "ORD-078",
    customer: "Sofia Martinez",
    amount: "$210.00",
    type: "refund",
    method: "credit_card",
    cardLast4: "1234",
    status: "completed",
    date: "Mar 14, 2024",
    time: "3:45 PM",
  },
  {
    id: "TXN-005",
    orderId: "ORD-004",
    customer: "Oliver Brown",
    amount: "$2,330.00",
    type: "payment",
    method: "apple_pay",
    cardLast4: null,
    status: "pending",
    date: "Mar 14, 2024",
    time: "1:00 PM",
  },
  {
    id: "TXN-006",
    orderId: "ORD-005",
    customer: "Ava Johnson",
    amount: "$680.00",
    type: "payment",
    method: "credit_card",
    cardLast4: "5678",
    status: "completed",
    date: "Mar 13, 2024",
    time: "5:30 PM",
  },
  {
    id: "TXN-007",
    orderId: "ORD-006",
    customer: "Liam Davis",
    amount: "$720.00",
    type: "payment",
    method: "paypal",
    cardLast4: null,
    status: "completed",
    date: "Mar 13, 2024",
    time: "10:15 AM",
  },
  {
    id: "TXN-008",
    orderId: "ORD-007",
    customer: "Isabella Garcia",
    amount: "$2,189.00",
    type: "payment",
    method: "credit_card",
    cardLast4: "9012",
    status: "failed",
    date: "Mar 12, 2024",
    time: "8:45 AM",
  },
  {
    id: "TXN-009",
    orderId: "ORD-007",
    customer: "Isabella Garcia",
    amount: "$2,189.00",
    type: "payment",
    method: "credit_card",
    cardLast4: "9012",
    status: "completed",
    date: "Mar 12, 2024",
    time: "9:00 AM",
  },
  {
    id: "TXN-010",
    orderId: "ORD-008",
    customer: "Noah Miller",
    amount: "$2,450.00",
    type: "payment",
    method: "apple_pay",
    cardLast4: null,
    status: "pending",
    date: "Mar 12, 2024",
    time: "7:30 AM",
  },
]

const statusStyles = {
  completed: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  failed: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
}

const methodLabels = {
  credit_card: "Credit Card",
  paypal: "PayPal",
  apple_pay: "Apple Pay",
  bank_transfer: "Bank Transfer",
}

const methodIcons = {
  credit_card: CreditCard,
  paypal: Building2,
  apple_pay: CreditCard,
  bank_transfer: Building2,
}

export default function TransactionsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch = 
      txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      txn.orderId.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || txn.status === statusFilter
    const matchesType = typeFilter === "all" || txn.type === typeFilter
    return matchesSearch && matchesStatus && matchesType
  })

  const totalRevenue = transactions
    .filter(t => t.type === "payment" && t.status === "completed")
    .reduce((sum, t) => sum + parseFloat(t.amount.replace(/[$,]/g, "")), 0)

  const totalRefunds = transactions
    .filter(t => t.type === "refund" && t.status === "completed")
    .reduce((sum, t) => sum + parseFloat(t.amount.replace(/[$,]/g, "")), 0)

  const pendingAmount = transactions
    .filter(t => t.status === "pending")
    .reduce((sum, t) => sum + parseFloat(t.amount.replace(/[$,]/g, "")), 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">Transactions</h1>
        <p className="mt-1 text-muted-foreground">
          View and manage payment history.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
              <TrendingUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">${totalRevenue.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Total Revenue</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900/30">
              <ArrowDownLeft className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">${totalRefunds.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Total Refunds</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
              <DollarSign className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">${pendingAmount.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-2xl bg-card p-4 shadow-sm sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-10 rounded-xl bg-secondary/50 pl-10"
          />
        </div>
        <div className="flex gap-3">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[140px] rounded-xl">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[140px] rounded-xl">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="payment">Payments</SelectItem>
              <SelectItem value="refund">Refunds</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="rounded-2xl bg-card shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Transaction
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Payment Method
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
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredTransactions.map((txn) => {
                const MethodIcon = methodIcons[txn.method as keyof typeof methodIcons]

                return (
                  <tr
                    key={txn.id}
                    className="group transition-colors hover:bg-muted/50"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-xl",
                          txn.type === "payment" 
                            ? "bg-emerald-100 dark:bg-emerald-900/30" 
                            : "bg-red-100 dark:bg-red-900/30"
                        )}>
                          {txn.type === "payment" ? (
                            <ArrowUpRight className={cn(
                              "h-5 w-5",
                              txn.type === "payment" 
                                ? "text-emerald-600 dark:text-emerald-400" 
                                : "text-red-600 dark:text-red-400"
                            )} />
                          ) : (
                            <ArrowDownLeft className="h-5 w-5 text-red-600 dark:text-red-400" />
                          )}
                        </div>
                        <div>
                          <span className="font-medium">{txn.id}</span>
                          <p className="text-xs text-muted-foreground">{txn.orderId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm">{txn.customer}</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <MethodIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">
                          {methodLabels[txn.method as keyof typeof methodLabels]}
                          {txn.cardLast4 && (
                            <span className="text-muted-foreground"> ****{txn.cardLast4}</span>
                          )}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        variant="secondary"
                        className={cn(
                          "capitalize text-xs",
                          statusStyles[txn.status as keyof typeof statusStyles]
                        )}
                      >
                        {txn.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className={cn(
                        "font-medium",
                        txn.type === "refund" && "text-red-600 dark:text-red-400"
                      )}>
                        {txn.type === "refund" ? "-" : ""}{txn.amount}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div>
                        <span className="text-sm">{txn.date}</span>
                        <p className="text-xs text-muted-foreground">{txn.time}</p>
                      </div>
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
            Showing <span className="font-medium">{filteredTransactions.length}</span> of{" "}
            <span className="font-medium">{transactions.length}</span> transactions
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
    </div>
  )
}
