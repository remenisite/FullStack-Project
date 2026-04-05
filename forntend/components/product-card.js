"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
export function ProductCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;
    return (_jsxs("div", { className: "group relative", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [_jsxs("div", { className: "relative aspect-[3/4] overflow-hidden bg-secondary", children: [_jsx(Image, { src: product.image, alt: product.name, fill: true, className: "object-cover transition-transform duration-500 group-hover:scale-105" }), _jsxs("div", { className: "absolute top-3 left-3 flex flex-col gap-2", children: [product.isNew && (_jsx("span", { className: "px-2 py-1 text-xs font-medium bg-primary text-primary-foreground", children: "NEW" })), product.isSale && discount > 0 && (_jsxs("span", { className: "px-2 py-1 text-xs font-medium bg-accent text-accent-foreground", children: ["-", discount, "%"] }))] }), _jsxs("div", { className: cn("absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 transition-all duration-300", isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"), children: [_jsx("button", { onClick: () => setIsWishlisted(!isWishlisted), className: cn("p-3 rounded-full backdrop-blur-md transition-all duration-200", isWishlisted
                                    ? "bg-accent text-accent-foreground"
                                    : "bg-background/90 hover:bg-background text-foreground"), "aria-label": "Add to wishlist", children: _jsx(Heart, { className: cn("h-4 w-4", isWishlisted && "fill-current") }) }), _jsx("button", { className: "p-3 rounded-full bg-background/90 hover:bg-background backdrop-blur-md text-foreground transition-all duration-200", "aria-label": "Add to cart", children: _jsx(ShoppingBag, { className: "h-4 w-4" }) }), _jsx(Link, { href: `/products/${product.id}`, className: "p-3 rounded-full bg-background/90 hover:bg-background backdrop-blur-md text-foreground transition-all duration-200", "aria-label": "View details", children: _jsx(Eye, { className: "h-4 w-4" }) })] })] }), _jsxs("div", { className: "mt-4", children: [_jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: product.category }), _jsx("h3", { className: "mt-1 font-medium text-foreground", children: _jsx(Link, { href: `/products/${product.id}`, className: "hover:text-accent transition-colors", children: product.name }) }), _jsxs("div", { className: "mt-2 flex items-center gap-2", children: [_jsxs("span", { className: "font-semibold", children: ["$", product.price.toFixed(2)] }), product.originalPrice && (_jsxs("span", { className: "text-sm text-muted-foreground line-through", children: ["$", product.originalPrice.toFixed(2)] }))] })] })] }));
}
