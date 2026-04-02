"use client"

import { useState } from "react"
import { 
  Search, 
  Star,
  Check,
  X,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Filter
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
import { cn } from "@/lib/utils"

const reviews = [
  {
    id: 1,
    customer: {
      name: "Emma Wilson",
      email: "emma@email.com",
      avatar: "",
    },
    product: "Silk Evening Dress",
    rating: 5,
    title: "Absolutely stunning!",
    content: "The quality is exceptional. The silk feels luxurious and the fit is perfect. I received so many compliments at the gala. Worth every penny!",
    date: "Mar 15, 2024",
    status: "approved",
    helpful: 24,
  },
  {
    id: 2,
    customer: {
      name: "James Chen",
      email: "james@email.com",
      avatar: "",
    },
    product: "Cashmere Wool Coat",
    rating: 5,
    title: "Best coat I've ever owned",
    content: "Incredibly warm without being bulky. The craftsmanship is outstanding and it looks even better in person than in the photos.",
    date: "Mar 14, 2024",
    status: "pending",
    helpful: 0,
  },
  {
    id: 3,
    customer: {
      name: "Sofia Martinez",
      email: "sofia@email.com",
      avatar: "",
    },
    product: "Leather Crossbody Bag",
    rating: 4,
    title: "Great quality, minor issue",
    content: "Beautiful bag with excellent leather quality. Only giving 4 stars because the strap was slightly shorter than expected, but otherwise perfect.",
    date: "Mar 13, 2024",
    status: "approved",
    helpful: 18,
  },
  {
    id: 4,
    customer: {
      name: "Oliver Brown",
      email: "oliver@email.com",
      avatar: "",
    },
    product: "Italian Wool Blazer",
    rating: 5,
    title: "Impeccable tailoring",
    content: "The fit is absolutely perfect. Italian craftsmanship at its finest. This blazer elevates any outfit instantly.",
    date: "Mar 12, 2024",
    status: "pending",
    helpful: 0,
  },
  {
    id: 5,
    customer: {
      name: "Ava Johnson",
      email: "ava@email.com",
      avatar: "",
    },
    product: "Pearl Drop Earrings",
    rating: 5,
    title: "Elegant and timeless",
    content: "These earrings are absolutely gorgeous. The pearls have a beautiful luster and the gold setting is very well made. Perfect for special occasions.",
    date: "Mar 11, 2024",
    status: "approved",
    helpful: 31,
  },
  {
    id: 6,
    customer: {
      name: "Liam Davis",
      email: "liam@email.com",
      avatar: "",
    },
    product: "Satin Blouse",
    rating: 3,
    title: "Nice but runs small",
    content: "The material is beautiful but the sizing runs small. Had to exchange for a larger size. Once I got the right size, it looked great.",
    date: "Mar 10, 2024",
    status: "approved",
    helpful: 45,
  },
]

const statusStyles = {
  approved: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  pending: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  rejected: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "h-4 w-4",
            star <= rating
              ? "fill-gold text-gold"
              : "fill-muted text-muted"
          )}
        />
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [ratingFilter, setRatingFilter] = useState("all")

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch = 
      review.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.product.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || review.status === statusFilter
    const matchesRating = ratingFilter === "all" || review.rating === parseInt(ratingFilter)
    return matchesSearch && matchesStatus && matchesRating
  })

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
  const pendingCount = reviews.filter(r => r.status === "pending").length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">Reviews</h1>
        <p className="mt-1 text-muted-foreground">
          Manage and respond to customer reviews.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10">
              <Star className="h-6 w-6 fill-gold text-gold" />
            </div>
            <div>
              <p className="text-2xl font-semibold">{averageRating}</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/30">
              <Check className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">{reviews.length}</p>
              <p className="text-sm text-muted-foreground">Total Reviews</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-900/30">
              <Star className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">{pendingCount}</p>
              <p className="text-sm text-muted-foreground">Pending Review</p>
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
            placeholder="Search reviews..."
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
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
          <Select value={ratingFilter} onValueChange={setRatingFilter}>
            <SelectTrigger className="w-[140px] rounded-xl">
              <Star className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Ratings</SelectItem>
              <SelectItem value="5">5 Stars</SelectItem>
              <SelectItem value="4">4 Stars</SelectItem>
              <SelectItem value="3">3 Stars</SelectItem>
              <SelectItem value="2">2 Stars</SelectItem>
              <SelectItem value="1">1 Star</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="group rounded-2xl bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              {/* Customer & Product Info */}
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12 border border-border">
                  <AvatarImage src={review.customer.avatar} />
                  <AvatarFallback className="bg-secondary">
                    {review.customer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{review.customer.name}</p>
                    <Badge
                      variant="secondary"
                      className={cn(
                        "capitalize text-xs",
                        statusStyles[review.status as keyof typeof statusStyles]
                      )}
                    >
                      {review.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{review.product}</p>
                  <StarRating rating={review.rating} />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{review.date}</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-lg"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-xl">
                    <DropdownMenuItem className="gap-2 text-emerald-600">
                      <Check className="h-4 w-4" />
                      Approve
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-destructive">
                      <X className="h-4 w-4" />
                      Reject
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Review Content */}
            <div className="mt-4">
              <h3 className="font-semibold">{review.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {review.content}
              </p>
            </div>

            {/* Helpful Count */}
            {review.helpful > 0 && (
              <div className="mt-4 text-sm text-muted-foreground">
                {review.helpful} people found this helpful
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{filteredReviews.length}</span> of{" "}
          <span className="font-medium">{reviews.length}</span> reviews
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
  )
}
