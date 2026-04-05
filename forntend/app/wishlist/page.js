"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { Heart, ArrowRight } from "lucide-react";
const initialWishlistItems= [
    {
        id,
        name,
        price,
        originalPrice,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80",
        category,
        isNew,
    },
    {
        id,
        name,
        price,
        originalPrice,
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80",
        category,
        isSale,
    },
    {
        id,
        name,
        price,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
        category,
        isNew,
    },
];
export default function WishlistPage() {
    const [wishlistItems, setWishlistItems]= useState(initialWishlistItems);
    const removeFromWishlist= (id)=> {
        setWishlistItems((items)=> items.filter((item)=> item.id !== id));
    };
    return (_jsxs("main", { className: "min-h-screen bg-background", children: [_jsx(Navbar, {}), _jsx("section", { className: "pt-20 bg-secondary/50", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12", children: [_jsx("h1", { className: "font-serif text-4xl sm:text-5xl font-semibold text-center", children), _jsxs("p", { className: "mt-4 text-muted-foreground text-center", children, " items saved"] })] }) }), _jsx("section", { className: "py-12", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children=== 0 ? (_jsxs("div", { className: "text-center py-16", children: [_jsx(Heart, { className: "h-16 w-16 mx-auto text-muted-foreground mb-4" }), _jsx("h2", { className: "text-2xl font-semibold mb-2", children), _jsx("p", { className: "text-muted-foreground mb-8", children), _jsxs(Link, { href: "/products", className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors", children, _jsx(ArrowRight, { className: "h-4 w-4" })] })] })) : (_jsxs(_Fragment, { children: [_jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10", children: wishlistItems.map((product)=> (_jsxs("div", { className, children: [_jsx(ProductCard, { product), _jsx("button", { onClick: ()=> removeFromWishlist(product.id), className: "absolute top-3 right-3 z-10 p-2 bg-background/90 backdrop-blur-md rounded-full hover:bg-destructive hover:text-destructive-foreground transition-colors", "aria-label", children: _jsx(Heart, { className: "h-4 w-4 fill-current" }) })] }, product.id))) }), _jsx("div", { className: "mt-12 text-center", children: _jsx(Link, { href: "/products", className: "text-sm font-medium hover:text-accent transition-colors", children) })] })) }) }), _jsx(Footer, {})] }));
}
