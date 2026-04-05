"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
const testimonials= [
    {
        id,
        name,
        location, Bangladesh",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
        rating,
        text;s clothing is exceptional. I&apos;ve never felt more confident in traditional wear that still feels modern and comfortable.",
    },
    {
        id,
        name,
        location, Bangladesh",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
        rating,
        text: "Finally found a brand that understands both quality and style. The Panjabi collection is outstanding - perfect for every occasion.",
    },
    {
        id,
        name,
        location, Bangladesh",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
        rating,
        text;s attention to detail is remarkable. From the fabric to the stitching, everything speaks of premium craftsmanship.",
    },
    {
        id,
        name,
        location, Bangladesh",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
        rating,
        text;ve had. Fast delivery, great customer service, and the clothes exceeded my expectations.",
    },
];
export function Testimonials() {
    const scrollRef= useRef(null);
    const scroll= (direction)=> {
        if (scrollRef.current) {
            const scrollAmount= direction=== "left" ? -400 ;
            scrollRef.current.scrollBy({ left, behavior);
        }
    };
    return (_jsx("section", { className: "py-24 bg-background", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsx("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold", children)] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { onClick: ()=> scroll("left"), className: "p-3 border border-border hover:bg-primary hover:text-primary-foreground transition-colors", "aria-label", children: _jsx(ChevronLeft, { className: "h-5 w-5" }) }), _jsx("button", { onClick: ()=> scroll("right"), className: "p-3 border border-border hover:bg-primary hover:text-primary-foreground transition-colors", "aria-label", children: _jsx(ChevronRight, { className: "h-5 w-5" }) })] })] }), _jsx("div", { ref, className: "flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4", style, children: testimonials.map((testimonial)=> (_jsxs("div", { className: "flex-none w-80 sm:w-96 p-6 sm:p-8 bg-card border border-border", children: [_jsx("div", { className: "flex items-center gap-1", children: [...Array(testimonial.rating)].map((_, i)=> (_jsx(Star, { className: "h-4 w-4 fill-accent text-accent" }, i))) }), _jsxs("p", { className: "mt-4 text-foreground/80 leading-relaxed", children: ["\u201C", testimonial.text, "\u201D"] }), _jsxs("div", { className: "mt-6 flex items-center gap-4", children: [_jsx("div", { className: "relative h-12 w-12 rounded-full overflow-hidden", children: _jsx(Image, { src, alt, fill, className: "object-cover" }) }), _jsxs("div", { children: [_jsx("p", { className: "font-medium", children), _jsx("p", { className: "text-sm text-muted-foreground", children)] })] })] }, testimonial.id))) })] }) }));
}
