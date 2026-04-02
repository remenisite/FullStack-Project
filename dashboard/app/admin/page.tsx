import { StatsCard } from "@/components/admin/stats-card";
import { SalesChart } from "@/components/admin/sales-chart";
import { RevenueChart } from "@/components/admin/revenue-chart";
import { RecentOrders } from "@/components/admin/recent-orders";
import { RecentActivity } from "@/components/admin/recent-activity";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">
          Welcome back, Alexandra
        </h1>
        <p className="mt-1 text-muted-foreground">
          Here&apos;s what&apos;s happening with your store today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Sales"
          value="$124,590"
          change="+12.5%"
          changeType="positive"
          iconName="DollarSign"
        />
        <StatsCard
          title="Orders"
          value="1,284"
          change="+8.2%"
          changeType="positive"
          iconName="ShoppingCart"
          iconColor="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
        />
        <StatsCard
          title="Customers"
          value="4,521"
          change="+15.3%"
          changeType="positive"
          iconName="Users"
          iconColor="bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400"
        />
        <StatsCard
          title="Products"
          value="284"
          change="-2.4%"
          changeType="negative"
          iconName="Package"
          iconColor="bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <SalesChart />
        <RevenueChart />
      </div>

      {/* Orders and Activity */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentOrders />
        </div>
        <RecentActivity />
      </div>
    </div>
  );
}
