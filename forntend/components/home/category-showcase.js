"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
const categories= [
    {
        id,
        name,
        description,
        image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
        productCount,
    },
    {
        id,
        name,
        description,
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
        productCount,
    },
    {
        id,
        name,
        description,
        image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=80",
        productCount,
    },
];
export function CategoryShowcase() {
    return (_jsx("section", { className: "py-24 bg-secondary/30", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsx("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold", children)] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: categories.map((category)=> (_jsxs(Link, { href: `/products?category=${category.id}`, className: "group relative overflow-hidden bg-card", children: [_jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [_jsx(Image, { src, alt, fill, className: "object-cover transition-transform duration-700 group-hover:scale-105" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" })] }), _jsx("div", { className: "absolute inset-x-0 bottom-0 p-6 sm:p-8", children: _jsxs("div", { className: "flex items-end justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-serif text-3xl font-semibold text-primary-foreground", children), _jsxs("p", { className: "mt-1 text-sm text-primary-foreground/80", children, " Products"] })] }), _jsx("div", { className: "p-3 bg-background text-foreground rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300", children: _jsx(ArrowUpRight, { className: "h-5 w-5" }) })] }) })] }, category.id))) })] }) }));
}
