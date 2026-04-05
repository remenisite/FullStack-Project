import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowRight, Award, Users, Heart, Sparkles } from "lucide-react";
const values= [
    {
        icon,
        title,
        description, using traditional techniques passed down through generations.",
    },
    {
        icon,
        title,
        description, ensuring fair wages and preserving traditional craftsmanship.",
    },
    {
        icon,
        title,
        description: "Our commitment to sustainability means eco-friendly materials and ethical production practices.",
    },
    {
        icon,
        title,
        description,
    },
];
const milestones= [
    { year, title, description,
    { year, title, description, creating an immersive brand experience." },
    { year, title, description, shipping to over 50 countries worldwide." },
    { year, title, description: "Achieved 100% sustainable sourcing across all product lines." },
];
const team= [
    { name, role, image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
    { name, role, image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
    { name, role, image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
];
export default function AboutPage() {
    return (_jsxs("main", { className: "min-h-screen bg-background", children: [_jsx(Navbar, {}), _jsx("section", { className: "relative pt-20", children: _jsxs("div", { className: "relative h-[60vh] min-h-[400px]", children: [_jsx(Image, { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80", alt, fill, className: "object-cover", priority), _jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/30" }), _jsx("div", { className: "absolute inset-0 flex items-center", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full", children: _jsxs("div", { className: "max-w-xl", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-primary-foreground/80 uppercase", children), _jsxs("h1", { className: "mt-4 font-serif text-5xl sm:text-6xl font-semibold text-primary-foreground leading-tight", children, _jsx("br", {}), _jsx("span", { className, children)] })] }) }) })] }) }), _jsx("section", { className: "py-24", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsxs("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold leading-tight", children, _jsx("br", {}), "Meets Tomorrow"] }), _jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children, Remeni represents the perfect harmony between our rich cultural heritage and contemporary fashion sensibilities. We believe that clothing is more than fabric\u2014it's an expression of identity, a celebration of craftsmanship, and a bridge between generations." }), _jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children), _jsxs(Link, { href: "/products", className: "mt-8 inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all", children, _jsx(ArrowRight, { className: "h-4 w-4" })] })] }), _jsx("div", { className: "relative aspect-[4/5] overflow-hidden", children: _jsx(Image, { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt, fill, className: "object-cover" }) })] }) }) }), _jsx("section", { className: "py-24 bg-secondary/50", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsx("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold", children)] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: values.map((value)=> (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6", children: _jsx(value.icon, { className: "h-7 w-7" }) }), _jsx("h3", { className: "font-serif text-xl font-semibold mb-3", children), _jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children)] }, value.title))) })] }) }), _jsx("section", { className: "py-24", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [_jsxs("div", { className: "p-8 sm:p-12 bg-primary text-primary-foreground", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-primary-foreground/70 uppercase mb-4", children), _jsx("h3", { className: "font-serif text-2xl sm:text-3xl font-semibold mb-4", children), _jsx("p", { className: "text-primary-foreground/80 leading-relaxed", children, sustainable fashion that celebrates Bangladeshi heritage while empowering local artisans and promoting ethical practices. We strive to make luxury fashion accessible without compromising on quality or values." })] }), _jsxs("div", { className: "p-8 sm:p-12 bg-secondary", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase mb-4", children), _jsx("h3", { className: "font-serif text-2xl sm:text-3xl font-semibold mb-4", children), _jsx("p", { className: "text-muted-foreground leading-relaxed", children, inspiring a new generation of designers and artisans while setting the standard for sustainable luxury in the fashion industry." })] })] }) }) }), _jsx("section", { className: "py-24 bg-secondary/30", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsx("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold", children)] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: milestones.map((milestone, index)=> (_jsxs("div", { className, children: [_jsx("div", { className: "text-6xl font-serif font-bold text-accent/30 mb-2", children(index + 1).padStart(2, "0") }), _jsx("p", { className: "text-sm font-medium text-accent mb-2", children), _jsx("h3", { className: "font-semibold text-lg mb-2", children), _jsx("p", { className: "text-muted-foreground text-sm", children)] }, milestone.year))) })] }) }), _jsx("section", { className: "py-24", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsx("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold", children)] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto", children: team.map((member)=> (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "relative aspect-square overflow-hidden mb-4", children: _jsx(Image, { src, alt, fill, className: "object-cover" }) }), _jsx("h3", { className: "font-semibold", children), _jsx("p", { className: "text-sm text-muted-foreground", children)] }, member.name))) })] }) }), _jsx(Footer, {})] }));
}
