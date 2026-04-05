"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut, ChevronRight, Edit2 } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Profile", icon: User, id: "profile" },
  { name: "Orders", icon: Package, id: "orders" },
  { name: "Wishlist", icon: Heart, id: "wishlist" },
  { name: "Addresses", icon: MapPin, id: "addresses" },
  { name: "Payment Methods", icon: CreditCard, id: "payment" },
  { name: "Settings", icon: Settings, id: "settings" },
]

const orders = [
  {
    id: "ORD-2024-001",
    date: "March 15, 2026",
    status: "Delivered",
    total: 334,
    items: [
      { name: "Silk Blend Kurta", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&q=80", quantity: 1, price: 89 },
      { name: "Embroidered Saree", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&q=80", quantity: 1, price: 245 },
    ],
  },
  {
    id: "ORD-2024-002",
    date: "March 10, 2026",
    status: "Processing",
    total: 165,
    items: [
      { name: "Floral Maxi Dress", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&q=80", quantity: 1, price: 165 },
    ],
  },
]

const addresses = [
  {
    id: 1,
    type: "Home",
    name: "John Doe",
    address: "123 Fashion Street, Apartment 4B",
    city: "Dhaka 1205",
    country: "Bangladesh",
    phone: "+880 1234 567890",
    isDefault: true,
  },
  {
    id: 2,
    type: "Office",
    name: "John Doe",
    address: "456 Business Tower, Floor 12",
    city: "Dhaka 1212",
    country: "Bangladesh",
    phone: "+880 9876 543210",
    isDefault: false,
  },
]

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-center">
            My Account
          </h1>
        </div>
      </section>

      {/* Account Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1">
              <div className="bg-card border border-border p-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-secondary">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                    <h3 className="font-semibold">John Doe
                    <p className="text-sm text-muted-foreground">john@example.com
                  </div>
                </div>
                <nav className="space-y-1">
                  {navigation.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors",
                        activeTab === item.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </button>
                  ))}
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors mt-4">
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </button>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="bg-card border border-border p-6 sm:p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-2xl font-semibold">Personal Information
                    <button className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                      <Edit2 className="h-4 w-4" />
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                      <label className="block text-sm text-muted-foreground mb-1">First Name
                      <p className="font-medium">John
                    </div>
                    
                      <label className="block text-sm text-muted-foreground mb-1">Last Name
                      <p className="font-medium">Doe
                    </div>
                    
                      <label className="block text-sm text-muted-foreground mb-1">Email
                      <p className="font-medium">john@example.com
                    </div>
                    
                      <label className="block text-sm text-muted-foreground mb-1">Phone
                      <p className="font-medium">+880 1234 567890</p>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm text-muted-foreground mb-1">Date of Birth
                      <p className="font-medium">January 15, 1990</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-semibold">Order History
                  {orders.map((order) => (
                    <div key={order.id} className="bg-card border border-border p-6">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-border">
                        
                          <p className="font-semibold">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <span className={cn(
                            "px-3 py-1 text-xs font-medium",
                            order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          )}>
                            {order.status}
                          </span>
                          <p className="mt-1 font-semibold">${order.total.toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {order.items.map((item, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="relative w-16 h-20 bg-secondary overflow-hidden flex-shrink-0">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-medium">${item.price.toFixed(2)}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-border flex justify-end">
                        <button className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors">
                          View Details
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Addresses Tab */}
              {activeTab === "addresses" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif text-2xl font-semibold">Saved Addresses
                    <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                      Add New Address
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {addresses.map((address) => (
                      <div key={address.id} className="bg-card border border-border p-6 relative">
                        {address.isDefault && (
                          <span className="absolute top-4 right-4 px-2 py-1 bg-accent text-accent-foreground text-xs font-medium">
                            Default
                          </span>
                        )}
                        <p className="text-sm font-medium text-muted-foreground mb-2">{address.type}</p>
                        <p className="font-semibold">{address.name}</p>
                        <p className="text-sm text-muted-foreground mt-2">{address.address}</p>
                        <p className="text-sm text-muted-foreground">{address.city}</p>
                        <p className="text-sm text-muted-foreground">{address.country}</p>
                        <p className="text-sm text-muted-foreground mt-2">{address.phone}</p>
                        <div className="mt-4 pt-4 border-t border-border flex gap-4">
                          <button className="text-sm font-medium hover:text-accent transition-colors">Edit
                          <button className="text-sm font-medium text-destructive hover:text-destructive/80 transition-colors">Delete
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Wishlist Tab */}
              {activeTab === "wishlist" && (
                <div className="text-center py-12 bg-card border border-border">
                  <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Your Wishlist
                  <p className="text-muted-foreground mb-4">View and manage your saved items
                  <Link
                    href="/wishlist"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    View Wishlist
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              )}

              {/* Payment Tab */}
              {activeTab === "payment" && (
                <div className="bg-card border border-border p-6 sm:p-8">
                  <h2 className="font-serif text-2xl font-semibold mb-6">Payment Methods
                  <div className="text-center py-8">
                    <CreditCard className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                    <p className="text-muted-foreground mb-4">No payment methods saved yet
                    <button className="px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                      Add Payment Method
                    </button>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div className="bg-card border border-border p-6 sm:p-8">
                  <h2 className="font-serif text-2xl font-semibold mb-6">Account Settings
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      
                        <p className="font-medium">Email Notifications
                        <p className="text-sm text-muted-foreground">Receive updates about orders and promotions
                      </div>
                      <button className="w-12 h-6 bg-primary rounded-full relative">
                        <span className="absolute right-1 top-1 w-4 h-4 bg-primary-foreground rounded-full" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-border">
                      
                        <p className="font-medium">SMS Notifications
                        <p className="text-sm text-muted-foreground">Receive order updates via SMS
                      </div>
                      <button className="w-12 h-6 bg-secondary rounded-full relative">
                        <span className="absolute left-1 top-1 w-4 h-4 bg-muted-foreground rounded-full" />
                      </button>
                    </div>
                    <div className="pt-4">
                      <button className="px-6 py-3 border border-border text-sm font-medium hover:bg-secondary transition-colors">
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
