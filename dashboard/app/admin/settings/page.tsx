"use client"

import { useState } from "react"
import { 
  User,
  Store,
  CreditCard,
  Bell,
  Shield,
  Globe,
  Camera,
  Save
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your account and store preferences.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
          <TabsTrigger
            value="profile"
            className={cn(
              "gap-2 rounded-xl border border-transparent px-4 py-2 data-[state=active]:border-border data-[state=active]:bg-card data-[state=active]:shadow-sm"
            )}
          >
            <User className="h-4 w-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="store"
            className={cn(
              "gap-2 rounded-xl border border-transparent px-4 py-2 data-[state=active]:border-border data-[state=active]:bg-card data-[state=active]:shadow-sm"
            )}
          >
            <Store className="h-4 w-4" />
            Store Info
          </TabsTrigger>
          <TabsTrigger
            value="payments"
            className={cn(
              "gap-2 rounded-xl border border-transparent px-4 py-2 data-[state=active]:border-border data-[state=active]:bg-card data-[state=active]:shadow-sm"
            )}
          >
            <CreditCard className="h-4 w-4" />
            Payments
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className={cn(
              "gap-2 rounded-xl border border-transparent px-4 py-2 data-[state=active]:border-border data-[state=active]:bg-card data-[state=active]:shadow-sm"
            )}
          >
            <Bell className="h-4 w-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger
            value="security"
            className={cn(
              "gap-2 rounded-xl border border-transparent px-4 py-2 data-[state=active]:border-border data-[state=active]:bg-card data-[state=active]:shadow-sm"
            )}
          >
            <Shield className="h-4 w-4" />
            Security
          </TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold">Profile Information</h2>
            <p className="text-sm text-muted-foreground">Update your personal details and photo.</p>
            
            <Separator className="my-6" />

            {/* Avatar */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24 border-4 border-gold/20">
                  <AvatarImage src="/avatar.jpg" />
                  <AvatarFallback className="bg-gold text-gold-foreground text-2xl font-semibold">
                    AM
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="icon"
                  className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <h3 className="font-semibold">Profile Photo</h3>
                <p className="text-sm text-muted-foreground">
                  JPG, PNG or GIF. Max size 2MB.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="Alexandra" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Mitchell" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="alexandra@remeni.com" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" defaultValue="+1 (555) 123-4567" className="rounded-xl" />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                defaultValue="Luxury fashion brand owner and creative director."
                className="min-h-[100px] rounded-xl"
              />
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="gap-2 rounded-xl bg-gold text-gold-foreground hover:bg-gold/90">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Store Settings */}
        <TabsContent value="store" className="space-y-6">
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold">Store Information</h2>
            <p className="text-sm text-muted-foreground">Manage your store details and branding.</p>
            
            <Separator className="my-6" />

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="storeName">Store Name</Label>
                <Input id="storeName" defaultValue="Remeni" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storeEmail">Store Email</Label>
                <Input id="storeEmail" type="email" defaultValue="hello@remeni.com" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storePhone">Store Phone</Label>
                <Input id="storePhone" defaultValue="+1 (555) 987-6543" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                    <SelectItem value="jpy">JPY (¥)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="storeAddress">Store Address</Label>
              <Textarea
                id="storeAddress"
                defaultValue="123 Fashion Avenue, Suite 500&#10;New York, NY 10001&#10;United States"
                className="min-h-[100px] rounded-xl"
              />
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="storeDescription">Store Description</Label>
              <Textarea
                id="storeDescription"
                defaultValue="Remeni is a luxury fashion brand offering timeless elegance and modern sophistication. Our carefully curated collection features premium materials and exquisite craftsmanship."
                className="min-h-[100px] rounded-xl"
              />
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="gap-2 rounded-xl bg-gold text-gold-foreground hover:bg-gold/90">
                <Save className="h-4 w-4" />
                Save Changes
              </Button>
            </div>
          </div>

          {/* Regional Settings */}
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold">Regional Settings</h2>
            <p className="text-sm text-muted-foreground">Configure timezone and localization.</p>
            
            <Separator className="my-6" />

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Timezone</Label>
                <Select defaultValue="est">
                  <SelectTrigger className="rounded-xl">
                    <Globe className="mr-2 h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="est">Eastern Time (US & Canada)</SelectItem>
                    <SelectItem value="pst">Pacific Time (US & Canada)</SelectItem>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="cet">Central European Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Date Format</Label>
                <Select defaultValue="mdy">
                  <SelectTrigger className="rounded-xl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="ymd">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Payment Settings */}
        <TabsContent value="payments" className="space-y-6">
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold">Payment Methods</h2>
            <p className="text-sm text-muted-foreground">Configure accepted payment methods.</p>
            
            <Separator className="my-6" />

            <div className="space-y-4">
              {[
                { name: "Credit/Debit Cards", description: "Accept Visa, Mastercard, Amex", enabled: true },
                { name: "PayPal", description: "Accept PayPal payments", enabled: true },
                { name: "Apple Pay", description: "Accept Apple Pay", enabled: true },
                { name: "Google Pay", description: "Accept Google Pay", enabled: false },
                { name: "Bank Transfer", description: "Accept direct bank transfers", enabled: false },
              ].map((method) => (
                <div
                  key={method.name}
                  className="flex items-center justify-between rounded-xl bg-muted/50 p-4"
                >
                  <div>
                    <p className="font-medium">{method.name}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  <Switch defaultChecked={method.enabled} />
                </div>
              ))}
            </div>
          </div>

          {/* Stripe Settings */}
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold">Stripe Configuration</h2>
            <p className="text-sm text-muted-foreground">Connect your Stripe account for payments.</p>
            
            <Separator className="my-6" />

            <div className="grid gap-6">
              <div className="space-y-2">
                <Label htmlFor="stripeKey">Publishable Key</Label>
                <Input id="stripeKey" placeholder="pk_live_..." className="rounded-xl font-mono" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="stripeSecret">Secret Key</Label>
                <Input id="stripeSecret" type="password" placeholder="sk_live_..." className="rounded-xl font-mono" />
              </div>
              <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
                <div>
                  <p className="font-medium">Test Mode</p>
                  <p className="text-sm text-muted-foreground">Use test credentials for development</p>
                </div>
                <Switch />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button className="gap-2 rounded-xl bg-gold text-gold-foreground hover:bg-gold/90">
                <Save className="h-4 w-4" />
                Save Settings
              </Button>
            </div>
          </div>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold">Email Notifications</h2>
            <p className="text-sm text-muted-foreground">Choose what notifications you receive.</p>
            
            <Separator className="my-6" />

            <div className="space-y-4">
              {[
                { name: "New Orders", description: "Get notified when a new order is placed", enabled: true },
                { name: "Order Status Updates", description: "Receive updates when order status changes", enabled: true },
                { name: "Low Stock Alerts", description: "Get alerts when products are running low", enabled: true },
                { name: "New Reviews", description: "Be notified when customers leave reviews", enabled: false },
                { name: "Weekly Reports", description: "Receive weekly sales and analytics reports", enabled: true },
                { name: "Marketing Tips", description: "Get tips to improve your store", enabled: false },
              ].map((notification) => (
                <div
                  key={notification.name}
                  className="flex items-center justify-between rounded-xl bg-muted/50 p-4"
                >
                  <div>
                    <p className="font-medium">{notification.name}</p>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                  <Switch defaultChecked={notification.enabled} />
                </div>
              ))}
            </div>
          </div>

          {/* Push Notifications */}
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold">Push Notifications</h2>
            <p className="text-sm text-muted-foreground">Configure browser and mobile notifications.</p>
            
            <Separator className="my-6" />

            <div className="space-y-4">
              {[
                { name: "Browser Notifications", description: "Show notifications in browser", enabled: true },
                { name: "Mobile Push", description: "Send notifications to mobile app", enabled: true },
                { name: "Sound Alerts", description: "Play sound for notifications", enabled: false },
              ].map((notification) => (
                <div
                  key={notification.name}
                  className="flex items-center justify-between rounded-xl bg-muted/50 p-4"
                >
                  <div>
                    <p className="font-medium">{notification.name}</p>
                    <p className="text-sm text-muted-foreground">{notification.description}</p>
                  </div>
                  <Switch defaultChecked={notification.enabled} />
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold">Change Password</h2>
            <p className="text-sm text-muted-foreground">Update your account password.</p>
            
            <Separator className="my-6" />

            <div className="max-w-md space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" className="rounded-xl" />
              </div>
              <Button className="gap-2 rounded-xl bg-gold text-gold-foreground hover:bg-gold/90">
                Update Password
              </Button>
            </div>
          </div>

          {/* Two-Factor Auth */}
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold">Two-Factor Authentication</h2>
            <p className="text-sm text-muted-foreground">Add an extra layer of security to your account.</p>
            
            <Separator className="my-6" />

            <div className="flex items-center justify-between rounded-xl bg-muted/50 p-4">
              <div>
                <p className="font-medium">Enable 2FA</p>
                <p className="text-sm text-muted-foreground">
                  Use an authenticator app for additional security
                </p>
              </div>
              <Switch />
            </div>
          </div>

          {/* Active Sessions */}
          <div className="rounded-2xl bg-card p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold">Active Sessions</h2>
            <p className="text-sm text-muted-foreground">Manage your active login sessions.</p>
            
            <Separator className="my-6" />

            <div className="space-y-4">
              {[
                { device: "MacBook Pro", location: "New York, US", current: true, lastActive: "Now" },
                { device: "iPhone 15 Pro", location: "New York, US", current: false, lastActive: "2 hours ago" },
                { device: "iPad Pro", location: "Los Angeles, US", current: false, lastActive: "3 days ago" },
              ].map((session, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl bg-muted/50 p-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">{session.device}</p>
                      {session.current && (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {session.location} • {session.lastActive}
                    </p>
                  </div>
                  {!session.current && (
                    <Button variant="outline" size="sm" className="rounded-lg text-destructive hover:bg-destructive/10">
                      Revoke
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
