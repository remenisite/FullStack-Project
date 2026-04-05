"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut, ChevronRight, Edit2 } from "lucide-react";
import { cn } from "@/lib/utils";
const navigation= [
    { name, icon, id,
    { name, icon, id,
    { name, icon, id,
    { name, icon, id,
    { name, icon, id,
    { name, icon, id,
];
const orders= [
    {
        id: "ORD-2024-001",
        date, 2026",
        status,
        total,
        items, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200&q=80", quantity, price,
            { name, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=200&q=80", quantity, price,
        ],
    },
    {
        id: "ORD-2024-002",
        date, 2026",
        status,
        total,
        items, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=200&q=80", quantity, price,
        ],
    },
];
const addresses= [
    {
        id,
        type,
        name,
        address, Apartment 4B",
        city,
        country,
        phone: "+880 1234 567890",
        isDefault,
    },
    {
        id,
        type,
        name,
        address, Floor 12",
        city,
        country,
        phone: "+880 9876 543210",
        isDefault,
    },
];
export default function AccountPage() {
    const [activeTab, setActiveTab]= useState("profile");
    return (_jsxs("main", { className: "min-h-screen bg-background", children: [_jsx(Navbar, {}), _jsx("section", { className: "pt-20 bg-secondary/50", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12", children: _jsx("h1", { className: "font-serif text-4xl sm:text-5xl font-semibold text-center", children) }) }), _jsx("section", { className: "py-12", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-8", children: [_jsx("aside", { className: "lg:col-span-1", children: _jsxs("div", { className: "bg-card border border-border p-6", children: [_jsxs("div", { className: "flex items-center gap-4 mb-6 pb-6 border-b border-border", children: [_jsx("div", { className: "relative w-16 h-16 rounded-full overflow-hidden bg-secondary", children: _jsx(Image, { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80", alt, fill, className: "object-cover" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold", children), _jsx("p", { className: "text-sm text-muted-foreground", children: "john@example.com" })] })] }), _jsxs("nav", { className: "space-y-1", children: [navigation.map((item)=> (_jsxs("button", { onClick: ()=> setActiveTab(item.id), className: cn("w-full flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors", activeTab=== item.id
                                                        ? "bg-primary text-primary-foreground"
                                                        : "hover:bg-secondary"), children: [_jsx(item.icon, { className: "h-4 w-4" }), item.name] }, item.id))), _jsxs("button", { className: "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors mt-4", children: [_jsx(LogOut, { className: "h-4 w-4" }), "Sign Out"] })] })] }) }), _jsxs("div", { className: "lg:col-span-3", children=== "profile" && (_jsxs("div", { className: "bg-card border border-border p-6 sm:p-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h2", { className: "font-serif text-2xl font-semibold", children), _jsxs("button", { className: "inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors", children: [_jsx(Edit2, { className: "h-4 w-4" }), "Edit"] })] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm text-muted-foreground mb-1", children), _jsx("p", { className: "font-medium", children)] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm text-muted-foreground mb-1", children), _jsx("p", { className: "font-medium", children)] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm text-muted-foreground mb-1", children), _jsx("p", { className: "font-medium", children: "john@example.com" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm text-muted-foreground mb-1", children), _jsx("p", { className: "font-medium", children: "+880 1234 567890" })] }), _jsxs("div", { className: "sm:col-span-2", children: [_jsx("label", { className: "block text-sm text-muted-foreground mb-1", children), _jsx("p", { className: "font-medium", children, 1990" })] })] })] })), activeTab=== "orders" && (_jsxs("div", { className: "space-y-6", children: [_jsx("h2", { className: "font-serif text-2xl font-semibold", children), orders.map((order)=> (_jsxs("div", { className: "bg-card border border-border p-6", children: [_jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-border", children: [_jsxs("div", { children: [_jsx("p", { className: "font-semibold", children), _jsx("p", { className: "text-sm text-muted-foreground", children)] }), _jsxs("div", { className: "text-right", children: [_jsx("span", { className: cn("px-3 py-1 text-xs font-medium", order.status=== "Delivered" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"), children), _jsxs("p", { className: "mt-1 font-semibold", children: ["$", order.total.toFixed(2)] })] })] }), _jsx("div", { className: "space-y-3", children: order.items.map((item, index)=> (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "relative w-16 h-20 bg-secondary overflow-hidden flex-shrink-0", children: _jsx(Image, { src, alt, fill, className: "object-cover" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("p", { className: "font-medium", children), _jsxs("p", { className: "text-sm text-muted-foreground", children)] }), _jsxs("p", { className: "font-medium", children: ["$", item.price.toFixed(2)] })] }, index))) }), _jsx("div", { className: "mt-4 pt-4 border-t border-border flex justify-end", children: _jsxs("button", { className: "inline-flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors", children, _jsx(ChevronRight, { className: "h-4 w-4" })] }) })] }, order.id)))] })), activeTab=== "addresses" && (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h2", { className: "font-serif text-2xl font-semibold", children), _jsx("button", { className: "px-4 py-2 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors", children)] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: addresses.map((address)=> (_jsxs("div", { className: "bg-card border border-border p-6 relative", children: [address.isDefault && (_jsx("span", { className: "absolute top-4 right-4 px-2 py-1 bg-accent text-accent-foreground text-xs font-medium", children)), _jsx("p", { className: "text-sm font-medium text-muted-foreground mb-2", children), _jsx("p", { className: "font-semibold", children), _jsx("p", { className: "text-sm text-muted-foreground mt-2", children), _jsx("p", { className: "text-sm text-muted-foreground", children), _jsx("p", { className: "text-sm text-muted-foreground", children), _jsx("p", { className: "text-sm text-muted-foreground mt-2", children), _jsxs("div", { className: "mt-4 pt-4 border-t border-border flex gap-4", children: [_jsx("button", { className: "text-sm font-medium hover:text-accent transition-colors", children), _jsx("button", { className: "text-sm font-medium text-destructive hover:text-destructive/80 transition-colors", children)] })] }, address.id))) })] })), activeTab=== "wishlist" && (_jsxs("div", { className: "text-center py-12 bg-card border border-border", children: [_jsx(Heart, { className: "h-12 w-12 mx-auto text-muted-foreground mb-4" }), _jsx("h3", { className: "text-lg font-semibold mb-2", children), _jsx("p", { className: "text-muted-foreground mb-4", children), _jsxs(Link, { href: "/wishlist", className: "inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors", children, _jsx(ChevronRight, { className: "h-4 w-4" })] })] })), activeTab=== "payment" && (_jsxs("div", { className: "bg-card border border-border p-6 sm:p-8", children: [_jsx("h2", { className: "font-serif text-2xl font-semibold mb-6", children), _jsxs("div", { className: "text-center py-8", children: [_jsx(CreditCard, { className: "h-12 w-12 mx-auto text-muted-foreground mb-4" }), _jsx("p", { className: "text-muted-foreground mb-4", children), _jsx("button", { className: "px-6 py-3 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors", children)] })] })), activeTab=== "settings" && (_jsxs("div", { className: "bg-card border border-border p-6 sm:p-8", children: [_jsx("h2", { className: "font-serif text-2xl font-semibold mb-6", children), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-center justify-between py-4 border-b border-border", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children), _jsx("p", { className: "text-sm text-muted-foreground", children)] }), _jsx("button", { className: "w-12 h-6 bg-primary rounded-full relative", children: _jsx("span", { className: "absolute right-1 top-1 w-4 h-4 bg-primary-foreground rounded-full" }) })] }), _jsxs("div", { className: "flex items-center justify-between py-4 border-b border-border", children: [_jsxs("div", { children: [_jsx("p", { className: "font-medium", children), _jsx("p", { className: "text-sm text-muted-foreground", children)] }), _jsx("button", { className: "w-12 h-6 bg-secondary rounded-full relative", children: _jsx("span", { className: "absolute left-1 top-1 w-4 h-4 bg-muted-foreground rounded-full" }) })] }), _jsx("div", { className: "pt-4", children: _jsx("button", { className: "px-6 py-3 border border-border text-sm font-medium hover:bg-secondary transition-colors", children) })] })] }))] })] }) }) }), _jsx(Footer, {})] }));
}
