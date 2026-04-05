import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Scissors, RefreshCw, Shirt, Gift, Truck, MessageCircle, ArrowRight } from "lucide-react";
const services= [
    {
        icon,
        title,
        description,
        features, "Fabric selection", "Multiple fittings", "4-6 week delivery"],
    },
    {
        icon,
        title,
        description, we&apos;ve got you covered.",
        features: ["One-on-one consultation", "Style assessment", "Curated selections", "Ongoing support"],
    },
    {
        icon,
        title,
        description, birthdays, and corporate gifting.",
        features, "Personalized cards", "Gift registry", "Corporate packages"],
    },
    {
        icon,
        title,
        description,
        features, "Quick turnaround", "Reasonable pricing", "Quality guarantee"],
    },
    {
        icon,
        title,
        description: "Need your order fast? Our express delivery service ensures your pieces arrive when you need them, wherever you are.",
        features: ["Same-day delivery (Dhaka)", "Next-day nationwide", "International shipping", "Real-time tracking"],
    },
    {
        icon,
        title,
        description: "Not sure what suits you? Book a complimentary style consultation with our fashion experts and discover your perfect look.",
        features: ["Free 30-min session", "Color analysis", "Body", "Trend recommendations"],
    },
];
const process= [
    { step, title, description,
    { step, title, description,
    { step, title, description,
    { step, title, description,
];
export default function ServicesPage() {
    return (_jsxs("main", { className: "min-h-screen bg-background", children: [_jsx(Navbar, {}), _jsx("section", { className: "pt-20 bg-secondary/50", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24", children: _jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsx("h1", { className: "mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold", children), _jsx("p", { className: "mt-6 text-lg text-muted-foreground", children, designed to make your shopping experience truly exceptional." })] }) }) }), _jsx("section", { className: "py-24", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service)=> (_jsxs("div", { className: "group p-8 border border-border hover:border-primary hover:bg-secondary/30 transition-all duration-300", children: [_jsx("div", { className: "inline-flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors", children: _jsx(service.icon, { className: "h-6 w-6" }) }), _jsx("h3", { className: "font-serif text-xl font-semibold mb-3", children), _jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-6", children), _jsx("ul", { className: "space-y-2", children: service.features.map((feature)=> (_jsxs("li", { className: "flex items-center gap-2 text-sm", children: [_jsx("span", { className: "w-1.5 h-1.5 bg-accent rounded-full" }), feature] }, feature))) })] }, service.title))) }) }) }), _jsx("section", { className: "py-24 bg-primary text-primary-foreground", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-primary-foreground/70 uppercase", children), _jsx("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold", children)] }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8", children: process.map((item, index)=> (_jsxs("div", { className: "relative text-center", children: [_jsx("div", { className: "text-6xl font-serif font-bold text-primary-foreground/20 mb-4", children), _jsx("h3", { className: "font-semibold text-lg mb-2", children), _jsx("p", { className: "text-primary-foreground/70 text-sm", children), index < process.length - 1 && (_jsx("div", { className: "hidden lg:block absolute top-8 left-[60%] w-[80%] border-t border-dashed border-primary-foreground/30" }))] }, item.step))) })] }) }), _jsx("section", { className: "py-24", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsx("div", { className: "relative aspect-[4/3] overflow-hidden", children: _jsx(Image, { src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80", alt, fill, className: "object-cover" }) }), _jsxs("div", { children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsxs("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold leading-tight", children, _jsx("br", {}), _jsx("span", { className, children)] }), _jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children, a perfectly tailored suit, or unique pieces that express your personal style, our bespoke service brings your vision to life with exceptional craftsmanship." }), _jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [_jsxs(Link, { href: "/contact", className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors", children, _jsx(ArrowRight, { className: "h-4 w-4" })] }), _jsx(Link, { href: "/products", className: "inline-flex items-center gap-2 px-8 py-4 border border-border font-medium tracking-wide hover:bg-secondary transition-colors", children)] })] })] }) }) }), _jsx("section", { className: "py-24 bg-secondary/30", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children: "Have Questions?" }), _jsx("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold", children), _jsx("p", { className: "mt-6 text-muted-foreground", children, phone, or visit our store." }), _jsxs(Link, { href: "/contact", className: "mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors", children, _jsx(ArrowRight, { className: "h-4 w-4" })] })] }) }) }), _jsx(Footer, {})] }));
}
