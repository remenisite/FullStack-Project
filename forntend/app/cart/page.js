"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
const initialCartItems= [
    {
        id,
        name,
        price,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80",
        size,
        quantity,
    },
    {
        id,
        name,
        price,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
        size,
        quantity,
    },
];
export default function CartPage() {
    const [cartItems, setCartItems]= useState(initialCartItems);
    const updateQuantity= (id, delta)=> {
        setCartItems((items)=> items.map((item)=> item.id=== id
            ? { ...item, quantity.max(1, item.quantity + delta) }
            ));
    };
    const removeItem= (id)=> {
        setCartItems((items)=> items.filter((item)=> item.id !== id));
    };
    const subtotal= cartItems.reduce((sum, item)=> sum + item.price * item.quantity, 0);
    const shipping= subtotal > 100 ? 0 ;
    const total= subtotal + shipping;
    return (_jsxs("main", { className: "min-h-screen bg-background", children: [_jsx(Navbar, {}), _jsx("section", { className: "pt-20 bg-secondary/50", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12", children: _jsx("h1", { className: "font-serif text-4xl sm:text-5xl font-semibold text-center", children) }) }), _jsx("section", { className: "py-12", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children=== 0 ? (_jsxs("div", { className: "text-center py-16", children: [_jsx(ShoppingBag, { className: "h-16 w-16 mx-auto text-muted-foreground mb-4" }), _jsx("h2", { className: "text-2xl font-semibold mb-2", children), _jsx("p", { className: "text-muted-foreground mb-8", children), _jsxs(Link, { href: "/products", className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors", children, _jsx(ArrowRight, { className: "h-4 w-4" })] })] })) : (_jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [_jsxs("div", { className: "lg:col-span-2", children: [_jsxs("div", { className: "border-b border-border pb-4 mb-6 hidden sm:grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground", children: [_jsx("div", { className: "col-span-6", children), _jsx("div", { className: "col-span-2 text-center", children), _jsx("div", { className: "col-span-2 text-center", children), _jsx("div", { className: "col-span-2 text-right", children)] }), _jsx("div", { className: "space-y-6", children: cartItems.map((item)=> (_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-12 gap-4 pb-6 border-b border-border", children: [_jsxs("div", { className: "sm:col-span-6 flex gap-4", children: [_jsx("div", { className: "relative w-24 h-32 flex-shrink-0 bg-secondary overflow-hidden", children: _jsx(Image, { src, alt, fill, className: "object-cover" }) }), _jsxs("div", { className: "flex flex-col justify-center", children: [_jsx("h3", { className: "font-medium", children: _jsx(Link, { href: `/products/${item.id}`, className: "hover:text-accent transition-colors", children) }), _jsxs("p", { className: "text-sm text-muted-foreground mt-1", children), _jsxs("button", { onClick: ()=> removeItem(item.id), className: "flex items-center gap-1 text-sm text-muted-foreground hover:text-destructive mt-2 transition-colors", children: [_jsx(Trash2, { className: "h-4 w-4" }), "Remove"] })] })] }), _jsx("div", { className: "sm:col-span-2 flex items-center justify-center", children: _jsxs("div", { className: "flex items-center border border-border", children: [_jsx("button", { onClick: ()=> updateQuantity(item.id, -1), className: "p-2 hover:bg-secondary transition-colors", children: _jsx(Minus, { className: "h-4 w-4" }) }), _jsx("span", { className: "w-10 text-center text-sm", children), _jsx("button", { onClick: ()=> updateQuantity(item.id, 1), className: "p-2 hover:bg-secondary transition-colors", children: _jsx(Plus, { className: "h-4 w-4" }) })] }) }), _jsxs("div", { className: "sm:col-span-2 flex items-center justify-center text-sm", children: ["$", item.price.toFixed(2)] }), _jsxs("div", { className: "sm:col-span-2 flex items-center justify-end font-medium", children: ["$", (item.price * item.quantity).toFixed(2)] })] }, item.id))) }), _jsx("div", { className: "mt-6 flex justify-between items-center", children: _jsx(Link, { href: "/products", className: "text-sm font-medium hover:text-accent transition-colors", children) })] }), _jsx("div", { className: "lg:col-span-1", children: _jsxs("div", { className: "bg-secondary/50 p-6 sm:p-8", children: [_jsx("h2", { className: "text-lg font-semibold mb-6", children), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-muted-foreground", children), _jsxs("span", { children: ["$", subtotal.toFixed(2)] })] }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-muted-foreground", children), _jsx("span", { children=== 0 ? "Free" : `$${shipping.toFixed(2)}` })] }), shipping=== 0 && (_jsx("p", { className: "text-xs text-muted-foreground", children: "You qualify for free shipping!" })), _jsxs("div", { className: "pt-4 border-t border-border flex justify-between", children: [_jsx("span", { className: "font-semibold", children), _jsxs("span", { className: "font-semibold", children: ["$", total.toFixed(2)] })] })] }), _jsxs(Link, { href: "/checkout", className: "mt-6 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors", children, _jsx(ArrowRight, { className: "h-4 w-4" })] }), _jsx("p", { className: "mt-4 text-xs text-center text-muted-foreground", children)] }) })] })) }) }), _jsx(Footer, {})] }));
}
