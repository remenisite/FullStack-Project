import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
const featuredPost= {
    id,
    title,
    excerpt;s most celebrated textile traditions, from jamdani to muslin.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80",
    author,
    date, 2026",
    readTime,
    category,
};
const blogPosts= [
    {
        id,
        title,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
        author,
        date, 2026",
        readTime,
        category,
    },
    {
        id,
        title,
        excerpt: "How Remeni is leading the way in eco-friendly fashion practices.",
        image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
        author,
        date, 2026",
        readTime,
        category,
    },
    {
        id,
        title,
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
        author,
        date, 2026",
        readTime,
        category,
    },
    {
        id,
        title,
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
        author,
        date, 2026",
        readTime,
        category,
    },
    {
        id,
        title,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
        author,
        date, 2026",
        readTime,
        category,
    },
];
const categories= [
    "All",
    "Style",
    "Heritage",
    "Sustainability",
    "Guide",
    "Wedding",
    "People",
];
export default function BlogPage() {
    return (_jsxs("main", { className: "min-h-screen bg-background", children: [_jsx(Navbar, {}), _jsx("section", { className: "pt-20 bg-secondary/50", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24", children: _jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsx("h1", { className: "mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold", children), _jsx("p", { className: "mt-6 text-lg text-muted-foreground", children, styling tips, and stories from the world of Bangladeshi fashion." })] }) }) }), _jsx("section", { className: "py-8 border-b border-border", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "flex flex-wrap items-center justify-center gap-4", children: categories.map((category)=> (_jsx("button", { className: "px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors", children, category))) }) }) }), _jsx("section", { className: "py-16", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsx(Link, { href: `/blog/${featuredPost.id}`, className, children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center", children: [_jsxs("div", { className: "relative aspect-[4/3] overflow-hidden", children: [_jsx(Image, { src, alt, fill, className: "object-cover transition-transform duration-700 group-hover:scale-105" }), _jsx("div", { className: "absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium", children)] }), _jsxs("div", { children: [_jsx("span", { className: "text-sm font-medium text-accent", children), _jsx("h2", { className: "mt-2 font-serif text-3xl sm:text-4xl font-semibold leading-tight group-hover:text-accent transition-colors", children), _jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children), _jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground", children: [_jsxs("span", { className: "flex items-center gap-1", children: [_jsx(User, { className: "h-4 w-4" }), featuredPost.author] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Calendar, { className: "h-4 w-4" }), featuredPost.date] }), _jsxs("span", { className: "flex items-center gap-1", children: [_jsx(Clock, { className: "h-4 w-4" }), featuredPost.readTime] })] }), _jsxs("div", { className: "mt-6 inline-flex items-center gap-2 font-medium group-hover:gap-4 transition-all", children, _jsx(ArrowRight, { className: "h-4 w-4" })] })] })] }) }) }) }), _jsx("section", { className: "py-16 bg-secondary/30", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsx("h2", { className: "font-serif text-3xl font-semibold mb-12", children), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: blogPosts.map((post)=> (_jsx(Link, { href: `/blog/${post.id}`, className, children: _jsxs("article", { className: "bg-card overflow-hidden", children: [_jsx("div", { className: "relative aspect-[3/2] overflow-hidden", children: _jsx(Image, { src, alt, fill, className: "object-cover transition-transform duration-500 group-hover:scale-105" }) }), _jsxs("div", { className: "p-6", children: [_jsx("span", { className: "text-xs font-medium text-accent uppercase tracking-wider", children), _jsx("h3", { className: "mt-2 font-serif text-xl font-semibold leading-tight group-hover:text-accent transition-colors", children), _jsx("p", { className: "mt-3 text-sm text-muted-foreground line-clamp-2", children), _jsxs("div", { className: "mt-4 flex items-center gap-4 text-xs text-muted-foreground", children: [_jsx("span", { children), _jsx("span", { children)] })] })] }) }, post.id))) }), _jsx("div", { className: "mt-12 text-center", children: _jsx("button", { className: "px-8 py-4 border border-border font-medium tracking-wide hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors", children) })] }) }), _jsx("section", { className: "py-24 bg-primary text-primary-foreground", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [_jsx("h2", { className: "font-serif text-3xl sm:text-4xl font-semibold", children), _jsx("p", { className: "mt-4 text-primary-foreground/80", children, styling tips, and exclusive content." }), _jsxs("form", { className: "mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto", children: [_jsx("input", { type, placeholder, className: "flex-1 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors" }), _jsx("button", { type, className: "px-8 py-4 bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-colors", children)] })] }) }) }), _jsx(Footer, {})] }));
}
