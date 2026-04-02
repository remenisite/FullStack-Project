"use client";

import { cn } from "@/lib/utils";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  ShoppingCart,
  Users,
  Package,
} from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  iconName: "DollarSign" | "ShoppingCart" | "Users" | "Package";
  iconColor?: string;
}

const iconMap = {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
};

export function StatsCard({
  title,
  value,
  change,
  changeType,
  iconName,
  iconColor = "bg-gold/10 text-gold",
}: StatsCardProps) {
  const Icon = iconMap[iconName];
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="font-serif text-3xl font-semibold tracking-tight">
            {value}
          </p>
          <div className="flex items-center gap-1">
            {changeType === "positive" ? (
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-red-500" />
            )}
            <span
              className={cn(
                "text-sm font-medium",
                changeType === "positive" ? "text-emerald-500" : "text-red-500",
              )}
            >
              {change}
            </span>
            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
        </div>
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
            iconColor,
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
      </div>
      {/* Decorative element */}
      <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gold/5 transition-transform duration-500 group-hover:scale-150" />
    </div>
  );
}
