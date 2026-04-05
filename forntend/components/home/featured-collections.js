"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
const collections= [
    {
        id,
        name,
        description,
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
        href: "/products?collection=summer",
    },
    {
        id,
        name,
        description,
        image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
        href: "/products?collection=heritage",
    },
    {
        id,
        name,
        description, bold statements",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
        href: "/products?collection=minimal",
    },
];
export function FeaturedCollections() {
    return (_jsx("section", { className: "py-24 bg-background", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsx("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold", children)] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: collections.map((collection, index)=> (_jsxs(Link, { href, className: "group relative aspect-[3/4] overflow-hidden", children: [_jsx(Image, { src, alt, fill, className: "object-cover transition-transform duration-700 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" }), _jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-6 sm:p-8", children: [_jsxs("p", { className: "text-xs font-medium tracking-[0.2em] text-primary-foreground/70 uppercase", children, String(index + 1).padStart(2, "0")] }), _jsx("h3", { className: "mt-2 font-serif text-2xl sm:text-3xl font-semibold text-primary-foreground", children), _jsx("p", { className: "mt-2 text-sm text-primary-foreground/80", children), _jsxs("div", { className: "mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground group-hover:gap-4 transition-all", children, _jsx(ArrowRight, { className: "h-4 w-4" })] })] })] }, collection.id))) })] }) }));
}
