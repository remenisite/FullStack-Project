"use client"

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Package } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const salesGrowthData = [
  { month: "Jan", thisYear: 12000, lastYear: 9000 },
  { month: "Feb", thisYear: 15000, lastYear: 10500 },
  { month: "Mar", thisYear: 18000, lastYear: 12000 },
  { month: "Apr", thisYear: 16500, lastYear: 11500 },
  { month: "May", thisYear: 21000, lastYear: 14000 },
  { month: "Jun", thisYear: 19500, lastYear: 15500 },
  { month: "Jul", thisYear: 24000, lastYear: 17000 },
  { month: "Aug", thisYear: 22500, lastYear: 16500 },
  { month: "Sep", thisYear: 27000, lastYear: 19000 },
  { month: "Oct", thisYear: 25500, lastYear: 20500 },
  { month: "Nov", thisYear: 30000, lastYear: 23000 },
  { month: "Dec", thisYear: 35000, lastYear: 26000 },
]

const topProductsData = [
  { name: "Silk Evening Dress", sales: 145, revenue: 188255 },
  { name: "Cashmere Wool Coat", sales: 98, revenue: 240100 },
  { name: "Leather Crossbody Bag", sales: 167, revenue: 148630 },
  { name: "Italian Wool Blazer", sales: 76, revenue: 133000 },
  { name: "Pearl Drop Earrings", sales: 234, revenue: 98280 },
]

const customerGrowthData = [
  { month: "Jan", new: 120, returning: 340 },
  { month: "Feb", new: 145, returning: 380 },
  { month: "Mar", new: 178, returning: 420 },
  { month: "Apr", new: 156, returning: 390 },
  { month: "May", new: 198, returning: 480 },
  { month: "Jun", new: 212, returning: 510 },
]

const categoryDistribution = [
  { name: "Dresses", value: 35, color: "hsl(var(--gold))" },
  { name: "Outerwear", value: 25, color: "hsl(var(--foreground) / 0.7)" },
  { name: "Accessories", value: 20, color: "hsl(var(--foreground) / 0.5)" },
  { name: "Jewelry", value: 12, color: "hsl(var(--foreground) / 0.3)" },
  { name: "Tops", value: 8, color: "hsl(var(--foreground) / 0.15)" },
]

const stats = [
  {
    title: "Total Revenue",
    value: "$284,590",
    change: "+18.2%",
    changeType: "positive",
    icon: DollarSign,
    iconBg: "bg-gold/10 text-gold",
  },
  {
    title: "Total Orders",
    value: "2,847",
    change: "+12.5%",
    changeType: "positive",
    icon: ShoppingCart,
    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    title: "New Customers",
    value: "1,009",
    change: "+24.3%",
    changeType: "positive",
    icon: Users,
    iconBg: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    title: "Products Sold",
    value: "4,521",
    change: "-2.1%",
    changeType: "negative",
    icon: Package,
    iconBg: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
  },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-semibold tracking-tight">Analytics</h1>
          <p className="mt-1 text-muted-foreground">
            Track your store&apos;s performance metrics.
          </p>
        </div>
        <Select defaultValue="30days">
          <SelectTrigger className="w-[180px] rounded-xl">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="year">This year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <p className="font-serif text-3xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <div className="flex items-center gap-1">
                  {stat.changeType === "positive" ? (
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                  <span
                    className={cn(
                      "text-sm font-medium",
                      stat.changeType === "positive" ? "text-emerald-500" : "text-red-500"
                    )}
                  >
                    {stat.change}
                  </span>
                  <span className="text-xs text-muted-foreground">vs last period</span>
                </div>
              </div>
              <div
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
                  stat.iconBg
                )}
              >
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gold/5 transition-transform duration-500 group-hover:scale-150" />
          </div>
        ))}
      </div>

      {/* Sales Growth Chart */}
      <div className="rounded-2xl bg-card p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-lg font-semibold">Sales Growth</h2>
            <p className="text-sm text-muted-foreground">Compare year over year performance</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-gold" />
              <span className="text-xs text-muted-foreground">This Year</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-foreground/30" />
              <span className="text-xs text-muted-foreground">Last Year</span>
            </div>
          </div>
        </div>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={salesGrowthData}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
                labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
              />
              <Line
                type="monotone"
                dataKey="thisYear"
                name="This Year"
                stroke="hsl(var(--gold))"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: "hsl(var(--gold))", stroke: "hsl(var(--card))", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="lastYear"
                name="Last Year"
                stroke="hsl(var(--foreground) / 0.3)"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Products */}
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="font-serif text-lg font-semibold">Top Products</h2>
            <p className="text-sm text-muted-foreground">Best selling items this period</p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={topProductsData}
                layout="vertical"
                margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                  width={120}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                  }}
                  formatter={(value: number, name: string) => [
                    name === "sales" ? `${value} units` : `$${value.toLocaleString()}`,
                    name === "sales" ? "Units Sold" : "Revenue",
                  ]}
                />
                <Bar
                  dataKey="sales"
                  fill="hsl(var(--gold))"
                  radius={[0, 6, 6, 0]}
                  maxBarSize={32}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="font-serif text-lg font-semibold">Sales by Category</h2>
            <p className="text-sm text-muted-foreground">Revenue distribution</p>
          </div>
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <div className="h-[220px] w-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {categoryDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "12px",
                    }}
                    formatter={(value: number) => [`${value}%`, "Share"]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 space-y-3">
              {categoryDistribution.map((category) => (
                <div key={category.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-sm">{category.name}</span>
                  </div>
                  <span className="text-sm font-medium">{category.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Growth */}
      <div className="rounded-2xl bg-card p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-serif text-lg font-semibold">Customer Growth</h2>
            <p className="text-sm text-muted-foreground">New vs returning customers</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-gold" />
              <span className="text-xs text-muted-foreground">New Customers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-foreground/30" />
              <span className="text-xs text-muted-foreground">Returning</span>
            </div>
          </div>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={customerGrowthData}
              margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                vertical={false}
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                }}
              />
              <Bar
                dataKey="new"
                name="New Customers"
                fill="hsl(var(--gold))"
                radius={[6, 6, 0, 0]}
                maxBarSize={40}
              />
              <Bar
                dataKey="returning"
                name="Returning"
                fill="hsl(var(--foreground) / 0.2)"
                radius={[6, 6, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
