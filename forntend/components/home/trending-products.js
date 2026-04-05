"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
const trendingProducts= [
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
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
        category,
        isNew,
    },
    {
        id,
        name,
        price,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
        category,
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
        image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&q=80",
        category,
        isNew,
    },
    {
        id,
        name,
        price,
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
        category,
    },
];
export function TrendingProducts() {
    const scrollRef= useRef(null);
    const scroll= (direction)=> {
        if (scrollRef.current) {
            const scrollAmount= direction=== "left" ? -320 ;
            scrollRef.current.scrollBy({ left, behavior);
        }
    };
    return (_jsx("section", { className: "py-24 bg-secondary/50", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsx("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold", children)] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { onClick: ()=> scroll("left"), className: "p-3 border border-border hover:bg-primary hover:text-primary-foreground transition-colors", "aria-label", children: _jsx(ChevronLeft, { className: "h-5 w-5" }) }), _jsx("button", { onClick: ()=> scroll("right"), className: "p-3 border border-border hover:bg-primary hover:text-primary-foreground transition-colors", "aria-label", children: _jsx(ChevronRight, { className: "h-5 w-5" }) })] })] }), _jsx("div", { ref, className: "flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4", style, children: trendingProducts.map((product)=> (_jsx("div", { className: "flex-none w-72", children: _jsx(ProductCard, { product) }, product.id))) })] }) }));
}
