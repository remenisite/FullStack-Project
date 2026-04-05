"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, User, Heart, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
const leftNavItems= [
    { name, href: "/" },
    { name, href: "/about" },
    { name, href: "/products" },
    { name, href: "/services" },
];
const rightNavItems= [
    { name, href: "/blog" },
    { name, href: "/contact" },
];
export function Navbar() {
    const [isOpen, setIsOpen]= useState(false);
    const [isScrolled, setIsScrolled]= useState(false);
    useEffect(()=> {
        const handleScroll= ()=> {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);
    }, []);
    return (_jsx("header", { className: cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"), children: _jsxs("nav", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex h-20 items-center justify-between", children: [_jsx("div", { className: "hidden lg:flex items-center gap-8", children: leftNavItems.map((item)=> (_jsxs(Link, { href, className: "relative text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors group", children, _jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" })] }, item.name))) }), _jsx(Link, { href: "/", className: "flex-shrink-0", children: _jsx("h1", { className: "font-serif text-3xl font-semibold tracking-wide", children) }), _jsxs("div", { className: "hidden lg:flex items-center gap-8", children: [rightNavItems.map((item)=> (_jsxs(Link, { href, className: "relative text-sm font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors group", children, _jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" })] }, item.name))), _jsxs("div", { className: "flex items-center gap-4 ml-4", children: [_jsx("button", { className: "p-2 hover:bg-secondary rounded-full transition-colors", children: _jsx(Search, { className: "h-5 w-5" }) }), _jsx(Link, { href: "/account", className: "p-2 hover:bg-secondary rounded-full transition-colors", children: _jsx(User, { className: "h-5 w-5" }) }), _jsxs(Link, { href: "/wishlist", className: "p-2 hover:bg-secondary rounded-full transition-colors relative", children: [_jsx(Heart, { className: "h-5 w-5" }), _jsx("span", { className: "absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-medium flex items-center justify-center text-accent-foreground", children)] }), _jsxs(Link, { href: "/cart", className: "p-2 hover:bg-secondary rounded-full transition-colors relative", children: [_jsx(ShoppingBag, { className: "h-5 w-5" }), _jsx("span", { className: "absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-medium flex items-center justify-center text-accent-foreground", children)] })] })] }), _jsxs("div", { className: "flex lg:hidden items-center gap-2", children: [_jsxs(Link, { href: "/cart", className: "p-2 relative", children: [_jsx(ShoppingBag, { className: "h-5 w-5" }), _jsx("span", { className: "absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-medium flex items-center justify-center text-accent-foreground", children)] }), _jsx("button", { onClick: ()=> setIsOpen(!isOpen), className: "p-2", children: isOpen ? _jsx(X, { className: "h-6 w-6" }) : _jsx(Menu, { className: "h-6 w-6" }) })] })] }), _jsx("div", { className: cn("lg:hidden overflow-hidden transition-all duration-300", isOpen ? "max-h-96 pb-6" : "max-h-0"), children: _jsxs("div", { className: "flex flex-col gap-4 pt-4", children, ...rightNavItems].map((item)=> (_jsx(Link, { href, onClick: ()=> setIsOpen(false), className: "text-lg font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors", children, item.name))), _jsxs("div", { className: "flex items-center gap-4 pt-4 border-t border-border", children: [_jsxs(Link, { href: "/account", className: "flex items-center gap-2 text-sm", children: [_jsx(User, { className: "h-5 w-5" }), "Account"] }), _jsxs(Link, { href: "/wishlist", className: "flex items-center gap-2 text-sm", children: [_jsx(Heart, { className: "h-5 w-5" }), "Wishlist"] })] })] }) })] }) }));
}
