"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { ProductFilters } from "@/components/products/product-filters";
import { ChevronLeft, ChevronRight, Grid3X3, LayoutGrid, SlidersHorizontal, X } from "lucide-react";
import { cn } from "@/lib/utils";
const allProducts= [
    { id, name, price, originalPrice, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80", category, isNew,
    { id, name, price, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80", category, isNew,
    { id, name, price, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80", category,
    { id, name, price, originalPrice, image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80", category, isSale,
    { id, name, price, image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=600&q=80", category, isNew,
    { id, name, price, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80", category,
    { id, name, price, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80", category, isNew,
    { id, name, price, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80", category, isNew,
    { id, name, price, originalPrice, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80", category, isNew, isSale,
    { id, name, price, image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80", category, isNew,
    { id, name, price, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80", category, isNew,
    { id, name, price, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", category, isNew,
    { id, name, price, image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80", category, isNew,
    { id, name, price, image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80", category,
    { id, name, price, originalPrice, image: "https://images.unsplash.com/photo-1476234251651-f353703a034d?w=600&q=80", category, isSale,
    { id, name, price, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80", category,
];
const ITEMS_PER_PAGE= 12;
export default function ProductsPage() {
    const [filters, setFilters]= useState({
        category,
        priceRange, 500],
        type,
        sort,
    });
    const [currentPage, setCurrentPage]= useState(1);
    const [gridView, setGridView]= useState("grid");
    const [showMobileFilters, setShowMobileFilters]= useState(false);
    const filteredProducts= useMemo(()=> {
        let filtered= [...allProducts];
        if (filters.category !== "all") {
            filtered= filtered.filter((p)=> p.category.toLowerCase()=== filters.category.toLowerCase());
        }
        filtered= filtered.filter((p)=> p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]);
        switch (filters.sort) {
            case "price-low":
                filtered.sort((a, b)=> a.price - b.price);
                break;
            case "price-high":
                filtered.sort((a, b)=> b.price - a.price);
                break;
            case "new":
                filtered.sort((a, b)=> (b.isNew ? 1) - (a.isNew ? 1));
                break;
            default;
        }
        return filtered;
    }, [filters]);
    const totalPages= Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts= filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    return (_jsxs("main", { className: "min-h-screen bg-background", children: [_jsx(Navbar, {}), _jsx("section", { className: "pt-20 bg-secondary/50", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24", children: _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsx("h1", { className: "mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold", children), _jsx("p", { className: "mt-4 text-muted-foreground max-w-md mx-auto", children)] }) }) }), _jsx("section", { className: "py-12", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [_jsx("aside", { className: "hidden lg:block w-64 flex-shrink-0", children: _jsx(ProductFilters, { filters, onFilterChange) }), _jsxs("div", { className: "lg:hidden flex items-center justify-between mb-4", children: [_jsxs("button", { onClick: ()=> setShowMobileFilters(true), className: "inline-flex items-center gap-2 px-4 py-2 border border-border hover:bg-secondary transition-colors", children: [_jsx(SlidersHorizontal, { className: "h-4 w-4" }), "Filters"] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { onClick: ()=> setGridView("grid"), className: cn("p-2 border transition-colors", gridView=== "grid"
                                                    ? "bg-primary text-primary-foreground border-primary"
                                                    : "border-border hover:bg-secondary"), children: _jsx(Grid3X3, { className: "h-4 w-4" }) }), _jsx("button", { onClick: ()=> setGridView("large"), className: cn("p-2 border transition-colors", gridView=== "large"
                                                    ? "bg-primary text-primary-foreground border-primary"
                                                    : "border-border hover:bg-secondary"), children: _jsx(LayoutGrid, { className: "h-4 w-4" }) })] })] }), showMobileFilters && (_jsxs("div", { className: "fixed inset-0 z-50 lg, children: [_jsx("div", { className: "absolute inset-0 bg-primary/50", onClick: ()=> setShowMobileFilters(false) }), _jsxs("div", { className: "absolute inset-y-0 left-0 w-80 max-w-full bg-background p-6 overflow-y-auto", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h2", { className: "text-lg font-semibold", children), _jsx("button", { onClick: ()=> setShowMobileFilters(false), children: _jsx(X, { className: "h-5 w-5" }) })] }), _jsx(ProductFilters, { filters, onFilterChange)] })] })), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "hidden lg:flex items-center justify-between mb-8 pb-4 border-b border-border", children: [_jsxs("p", { className: "text-sm text-muted-foreground", children, paginatedProducts.length, " of ", filteredProducts.length, " products"] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsxs("select", { value, onChange: (e)=> setFilters({ ...filters, sort), className: "px-4 py-2 bg-transparent border border-border text-sm focus:outline-none focus:ring-1 focus:ring-ring", children: [_jsx("option", { value, children), _jsx("option", { value, children), _jsx("option", { value: "price-low", children), _jsx("option", { value: "price-high", children)] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { onClick: ()=> setGridView("grid"), className: cn("p-2 border transition-colors", gridView=== "grid"
                                                                    ? "bg-primary text-primary-foreground border-primary"
                                                                    : "border-border hover:bg-secondary"), children: _jsx(Grid3X3, { className: "h-4 w-4" }) }), _jsx("button", { onClick: ()=> setGridView("large"), className: cn("p-2 border transition-colors", gridView=== "large"
                                                                    ? "bg-primary text-primary-foreground border-primary"
                                                                    : "border-border hover:bg-secondary"), children: _jsx(LayoutGrid, { className: "h-4 w-4" }) })] })] })] }), _jsx("div", { className: cn("grid gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10", gridView=== "grid"
                                            ? "grid-cols-2 md:grid-cols-3"
                                            : "grid-cols-1 sm:grid-cols-2"), children: paginatedProducts.map((product)=> (_jsx(ProductCard, { product, product.id))) }), paginatedProducts.length=== 0 && (_jsx("div", { className: "text-center py-16", children: _jsx("p", { className: "text-muted-foreground", children) })), totalPages > 1 && (_jsxs("div", { className: "mt-12 flex items-center justify-center gap-2", children: [_jsx("button", { onClick: ()=> setCurrentPage((p)=> Math.max(1, p - 1)), disabled=== 1, className: "p-2 border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: _jsx(ChevronLeft, { className: "h-5 w-5" }) }), [...Array(totalPages)].map((_, i)=> (_jsx("button", { onClick: ()=> setCurrentPage(i + 1), className: cn("w-10 h-10 border transition-colors", currentPage=== i + 1
                                                    ? "bg-primary text-primary-foreground border-primary"
                                                    : "border-border hover:bg-secondary"), children: i + 1 }, i + 1))), _jsx("button", { onClick: ()=> setCurrentPage((p)=> Math.min(totalPages, p + 1)), disabled=== totalPages, className: "p-2 border border-border hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-colors", children: _jsx(ChevronRight, { className: "h-5 w-5" }) })] }))] })] }) }) }), _jsx(Footer, {})] }));
}
