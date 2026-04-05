"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { Heart, Minus, Plus, ShoppingBag, Truck, RefreshCw, Shield, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
const products= {
    "1",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
        images: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
            "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80",
        ],
        category,
        isNew,
        description: "Experience the perfect blend of traditional elegance and modern comfort with our premium Silk Blend Kurta. Crafted from the finest silk-cotton blend, this kurta offers a luxurious feel while ensuring breathability for all-day comfort.",
        details: [
            "Premium silk-cotton blend fabric",
            "Traditional hand embroidery",
            "Comfortable regular fit",
            "Full sleeves with cuff buttons",
            "Mandarin collar",
            "Machine washable",
        ],
        sizes, "M", "L", "XL", "XXL"],
    },
};
const relatedProducts= [
    { id, name, price, image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80", category,
    { id, name, price, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80", category, isNew,
    { id, name, price, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80", category,
    { id, name, price, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", category, isNew,
];
export default function ProductDetailPage() {
    const params= useParams();
    const productId= params.id;
    const product= products[productId] || products["1"];
    const [selectedImage, setSelectedImage]= useState(0);
    const [selectedSize, setSelectedSize]= useState("");
    const [quantity, setQuantity]= useState(1);
    const [isWishlisted, setIsWishlisted]= useState(false);
    const discount= product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        ;
    return (_jsxs("main", { className: "min-h-screen bg-background", children: [_jsx(Navbar, {}), _jsx("div", { className: "pt-24 bg-secondary/30", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4", children: _jsxs("nav", { className: "flex items-center gap-2 text-sm", children: [_jsx(Link, { href: "/", className: "text-muted-foreground hover:text-foreground transition-colors", children), _jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground" }), _jsx(Link, { href: "/products", className: "text-muted-foreground hover:text-foreground transition-colors", children), _jsx(ChevronRight, { className: "h-4 w-4 text-muted-foreground" }), _jsx("span", { className: "text-foreground", children)] }) }) }), _jsx("section", { className: "py-12", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [_jsxs("div", { className: "flex flex-col-reverse sm:flex-row gap-4", children: [_jsx("div", { className: "flex sm:flex-col gap-2 sm:gap-4", children: product.images.map((image, index)=> (_jsx("button", { onClick: ()=> setSelectedImage(index), className: cn("relative w-20 h-24 overflow-hidden border-2 transition-colors", selectedImage=== index
                                                ? "border-primary"
                                                : "border-transparent hover:border-border"), children: _jsx(Image, { src, alt: `${product.name} view ${index + 1}`, fill, className: "object-cover" }) }, index))) }), _jsxs("div", { className: "flex-1 relative aspect-[3/4] overflow-hidden bg-secondary", children: [_jsx(Image, { src], alt, fill, className: "object-cover", priority), product.isNew && (_jsx("span", { className: "absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary text-primary-foreground", children)), discount > 0 && (_jsxs("span", { className: "absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-accent text-accent-foreground", children: ["-", discount, "%"] }))] })] }), _jsxs("div", { className: "flex flex-col", children: [_jsx("p", { className: "text-sm text-muted-foreground uppercase tracking-wider", children), _jsx("h1", { className: "mt-2 font-serif text-3xl sm:text-4xl font-semibold", children), _jsxs("div", { className: "mt-4 flex items-center gap-3", children: [_jsxs("span", { className: "text-2xl font-semibold", children: ["$", product.price.toFixed(2)] }), product.originalPrice && (_jsxs("span", { className: "text-lg text-muted-foreground line-through", children: ["$", product.originalPrice.toFixed(2)] }))] }), _jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children), _jsxs("div", { className: "mt-8", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "text-sm font-medium", children), _jsx("button", { className: "text-sm text-muted-foreground hover:text-foreground underline", children)] }), _jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: product.sizes.map((size)=> (_jsx("button", { onClick: ()=> setSelectedSize(size), className: cn("w-12 h-12 border text-sm font-medium transition-colors", selectedSize=== size
                                                        ? "bg-primary text-primary-foreground border-primary"
                                                        : "border-border hover:border-foreground"), children, size))) })] }), _jsxs("div", { className: "mt-8", children: [_jsx("h3", { className: "text-sm font-medium", children), _jsx("div", { className: "mt-3 flex items-center gap-4", children: _jsxs("div", { className: "flex items-center border border-border", children: [_jsx("button", { onClick: ()=> setQuantity((q)=> Math.max(1, q - 1)), className: "p-3 hover:bg-secondary transition-colors", children: _jsx(Minus, { className: "h-4 w-4" }) }), _jsx("span", { className: "w-12 text-center font-medium", children), _jsx("button", { onClick: ()=> setQuantity((q)=> q + 1), className: "p-3 hover:bg-secondary transition-colors", children: _jsx(Plus, { className: "h-4 w-4" }) })] }) })] }), _jsxs("div", { className: "mt-8 flex flex-col sm:flex-row gap-4", children: [_jsxs("button", { className: "flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors", children: [_jsx(ShoppingBag, { className: "h-5 w-5" }), "Add to Cart"] }), _jsx("button", { onClick: ()=> setIsWishlisted(!isWishlisted), className: cn("inline-flex items-center justify-center gap-2 px-6 py-4 border font-medium tracking-wide transition-colors", isWishlisted
                                                    ? "bg-accent text-accent-foreground border-accent"
                                                    : "border-border hover:bg-secondary"), children: _jsx(Heart, { className: cn("h-5 w-5", isWishlisted && "fill-current") }) })] }), _jsxs("div", { className: "mt-10 pt-10 border-t border-border grid grid-cols-3 gap-4", children: [_jsxs("div", { className: "text-center", children: [_jsx(Truck, { className: "h-6 w-6 mx-auto text-muted-foreground" }), _jsx("p", { className: "mt-2 text-xs text-muted-foreground", children)] }), _jsxs("div", { className: "text-center", children: [_jsx(RefreshCw, { className: "h-6 w-6 mx-auto text-muted-foreground" }), _jsx("p", { className: "mt-2 text-xs text-muted-foreground", children)] }), _jsxs("div", { className: "text-center", children: [_jsx(Shield, { className: "h-6 w-6 mx-auto text-muted-foreground" }), _jsx("p", { className: "mt-2 text-xs text-muted-foreground", children)] })] })] })] }) }) }), _jsx("section", { className: "py-12 bg-secondary/30", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "font-serif text-2xl font-semibold mb-6", children), _jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: product.details.map((detail, index)=> (_jsxs("li", { className: "flex items-center gap-2 text-muted-foreground", children: [_jsx("span", { className: "w-1.5 h-1.5 bg-accent rounded-full" }), detail] }, index))) })] }) }), _jsx("section", { className: "py-16", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "font-serif text-3xl font-semibold mb-8", children), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10", children: relatedProducts.map((product)=> (_jsx(ProductCard, { product, product.id))) })] }) }), _jsx(Footer, {})] }));
}
