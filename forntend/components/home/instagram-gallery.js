import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import { Instagram } from "lucide-react";
const instagramPosts= [
    {
        id,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
        likes,
    },
    {
        id,
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80",
        likes,
    },
    {
        id,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
        likes,
    },
    {
        id,
        image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
        likes,
    },
    {
        id,
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80",
        likes,
    },
    {
        id,
        image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=400&q=80",
        likes,
    },
];
export function InstagramGallery() {
    return (_jsx("section", { className: "py-24 bg-secondary/30", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsxs("div", { className: "inline-flex items-center gap-2 text-muted-foreground mb-4", children: [_jsx(Instagram, { className: "h-5 w-5" }), _jsx("span", { className: "text-sm font-medium tracking-wide", children: "@remeni.fashion" })] }), _jsx("h2", { className: "font-serif text-4xl sm:text-5xl font-semibold", children), _jsx("p", { className: "mt-4 text-muted-foreground max-w-md mx-auto", children: "Get inspired by our latest looks and behind-the-scenes moments" })] }), _jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4", children: instagramPosts.map((post)=> (_jsxs("a", { href: "https://instagram.com", target: "_blank", rel, className: "group relative aspect-square overflow-hidden", children: [_jsx(Image, { src, alt, fill, className: "object-cover transition-transform duration-500 group-hover:scale-110" }), _jsx("div", { className: "absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center", children: _jsx(Instagram, { className: "h-8 w-8 text-primary-foreground" }) })] }, post.id))) })] }) }));
}
