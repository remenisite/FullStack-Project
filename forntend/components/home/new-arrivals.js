import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product-card";
const newArrivals= [
    {
        id,
        name,
        price,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80",
        category,
        isNew,
    },
    {
        id,
        name,
        price,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
        category,
        isNew,
    },
    {
        id,
        name,
        price,
        originalPrice,
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
        category,
        isNew,
        isSale,
    },
    {
        id,
        name,
        price,
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
        category,
        isNew,
    },
    {
        id,
        name,
        price,
        image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80",
        category,
        isNew,
    },
    {
        id,
        name,
        price,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        category,
        isNew,
    },
];
export function NewArrivals() {
    return (_jsx("section", { className: "py-24 bg-background", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsx("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold", children)] }), _jsxs(Link, { href: "/products?sort=new", className: "inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all group", children, _jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10", children: newArrivals.slice(0, 4).map((product)=> (_jsx(ProductCard, { product, product.id))) })] }) }));
}
