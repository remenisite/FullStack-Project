"use client"

import { useState } from "react"
import { 
  Plus, 
  MoreHorizontal, 
  Pencil, 
  Trash2,
  FolderTree,
  Package,
  Image as ImageIcon
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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: 1,
    name: "Dresses",
    slug: "dresses",
    description: "Elegant dresses for every occasion",
    products: 45,
    image: "/placeholder.svg",
    status: "active",
  },
  {
    id: 2,
    name: "Outerwear",
    slug: "outerwear",
    description: "Premium coats, jackets, and blazers",
    products: 28,
    image: "/placeholder.svg",
    status: "active",
  },
  {
    id: 3,
    name: "Accessories",
    slug: "accessories",
    description: "Bags, belts, and fashion accessories",
    products: 62,
    image: "/placeholder.svg",
    status: "active",
  },
  {
    id: 4,
    name: "Tops",
    slug: "tops",
    description: "Blouses, shirts, and elegant tops",
    products: 38,
    image: "/placeholder.svg",
    status: "active",
  },
  {
    id: 5,
    name: "Jewelry",
    slug: "jewelry",
    description: "Fine jewelry and statement pieces",
    products: 54,
    image: "/placeholder.svg",
    status: "active",
  },
  {
    id: 6,
    name: "Bottoms",
    slug: "bottoms",
    description: "Skirts, pants, and trousers",
    products: 31,
    image: "/placeholder.svg",
    status: "active",
  },
  {
    id: 7,
    name: "Shoes",
    slug: "shoes",
    description: "Designer heels and luxury footwear",
    products: 0,
    image: "/placeholder.svg",
    status: "draft",
  },
  {
    id: 8,
    name: "Swimwear",
    slug: "swimwear",
    description: "Resort and beach collection",
    products: 0,
    image: "/placeholder.svg",
    status: "draft",
  },
]

const statusStyles = {
  active: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  draft: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
}

export default function CategoriesPage() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null)

  const handleEdit = (category: typeof categories[0]) => {
    setSelectedCategory(category)
    setIsEditDialogOpen(true)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-semibold tracking-tight">Categories</h1>
          <p className="mt-1 text-muted-foreground">
            Organize your products into categories.
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 rounded-xl bg-gold text-gold-foreground hover:bg-gold/90">
              <Plus className="h-4 w-4" />
              Add Category
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-2xl">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl">Add New Category</DialogTitle>
              <DialogDescription>
                Create a new product category.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Category Name</Label>
                <Input id="name" placeholder="Enter category name" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input id="slug" placeholder="category-slug" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter category description..."
                  className="min-h-[80px] rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label>Category Image</Label>
                <div className="flex h-24 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-border transition-colors hover:border-gold/50 hover:bg-muted/50">
                  <div className="text-center">
                    <ImageIcon className="mx-auto h-6 w-6 text-muted-foreground" />
                    <p className="mt-1 text-xs text-muted-foreground">
                      Click to upload
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" className="rounded-xl" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button className="rounded-xl bg-gold text-gold-foreground hover:bg-gold/90">
                Create Category
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Categories Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {/* Image */}
            <div className="aspect-video bg-muted flex items-center justify-center">
              <FolderTree className="h-12 w-12 text-muted-foreground/50" />
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
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
                    <DropdownMenuItem className="gap-2" onClick={() => handleEdit(category)}>
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

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Package className="h-4 w-4" />
                  <span>{category.products} products</span>
                </div>
                <Badge
                  variant="secondary"
                  className={cn(
                    "capitalize text-xs",
                    statusStyles[category.status as keyof typeof statusStyles]
                  )}
                >
                  {category.status}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-serif text-xl">Edit Category</DialogTitle>
            <DialogDescription>
              Update category details.
            </DialogDescription>
          </DialogHeader>
          {selectedCategory && (
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="edit-name">Category Name</Label>
                <Input 
                  id="edit-name" 
                  defaultValue={selectedCategory.name} 
                  className="rounded-xl" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-slug">Slug</Label>
                <Input 
                  id="edit-slug" 
                  defaultValue={selectedCategory.slug} 
                  className="rounded-xl" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  defaultValue={selectedCategory.description}
                  className="min-h-[80px] rounded-xl"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" className="rounded-xl" onClick={() => setIsEditDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="rounded-xl bg-gold text-gold-foreground hover:bg-gold/90">
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
