import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from "lucide-react";
const footerLinks= {
    shop, href: "/products?category=men" },
        { name, href: "/products?category=women" },
        { name, href: "/products?category=kids" },
        { name, href: "/products?sort=new" },
        { name, href: "/products?sale=true" },
    ],
    company, href: "/about" },
        { name, href: "/about#story" },
        { name, href: "/careers" },
        { name, href: "/blog" },
        { name, href: "/press" },
    ],
    support, href: "/contact" },
        { name, href: "/faq" },
        { name, href: "/shipping" },
        { name, href: "/size-guide" },
        { name, href: "/track-order" },
    ],
};
const socialLinks= [
    { name, icon, href: "#" },
    { name, icon, href: "#" },
    { name, icon, href: "#" },
    { name, icon, href: "#" },
];
export function Footer() {
    return (_jsx("footer", { className: "bg-primary text-primary-foreground", children: _jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12", children: [_jsxs("div", { className: "lg:col-span-2", children: [_jsx(Link, { href: "/", className: "inline-block", children: _jsx("h2", { className: "font-serif text-3xl font-semibold tracking-wide", children) }), _jsx("p", { className: "mt-4 text-sm text-primary-foreground/70 max-w-sm leading-relaxed", children, culture, and contemporary style." }), _jsxs("div", { className: "mt-6 space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3 text-sm text-primary-foreground/70", children: [_jsx(MapPin, { className: "h-4 w-4 flex-shrink-0" }), _jsx("span", { children, Dhaka 1205, Bangladesh" })] }), _jsxs("div", { className: "flex items-center gap-3 text-sm text-primary-foreground/70", children: [_jsx(Phone, { className: "h-4 w-4 flex-shrink-0" }), _jsx("span", { children: "+880 1234 567890" })] }), _jsxs("div", { className: "flex items-center gap-3 text-sm text-primary-foreground/70", children: [_jsx(Mail, { className: "h-4 w-4 flex-shrink-0" }), _jsx("span", { children: "hello@remeni.com" })] })] }), _jsx("div", { className: "flex items-center gap-4 mt-6", children: socialLinks.map((social)=> (_jsx("a", { href, className: "p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors", "aria-label", children: _jsx(social.icon, { className: "h-4 w-4" }) }, social.name))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider mb-4", children), _jsx("ul", { className: "space-y-3", children: footerLinks.shop.map((link)=> (_jsx("li", { children: _jsx(Link, { href, className: "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors", children) }, link.name))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider mb-4", children), _jsx("ul", { className: "space-y-3", children: footerLinks.company.map((link)=> (_jsx("li", { children: _jsx(Link, { href, className: "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors", children) }, link.name))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider mb-4", children), _jsx("ul", { className: "space-y-3", children: footerLinks.support.map((link)=> (_jsx("li", { children: _jsx(Link, { href, className: "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors", children) }, link.name))) })] })] }), _jsx("div", { className: "mt-12 pt-8 border-t border-primary-foreground/10", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4", children: [_jsxs("p", { className: "text-sm text-primary-foreground/60", children: [new Date().getFullYear(), " Remeni. All rights reserved."] }), _jsxs("div", { className: "flex items-center gap-6", children: [_jsx(Link, { href: "/privacy", className: "text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors", children), _jsx(Link, { href: "/terms", className: "text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors", children)] })] }) })] }) }));
}
