"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
export function Newsletter() {
    const [email, setEmail]= useState("");
    const [isSubmitted, setIsSubmitted]= useState(false);
    const handleSubmit= (e)=> {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail("");
        }
    };
    return (_jsx("section", { className: "py-24 bg-primary text-primary-foreground", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-primary-foreground/70 uppercase", children), _jsx("h2", { className: "mt-4 font-serif text-4xl sm:text-5xl font-semibold", children), _jsx("p", { className: "mt-4 text-lg text-primary-foreground/80", children, exclusive offers, and styling tips from our fashion experts." }), isSubmitted ? (_jsxs("div", { className: "mt-8 flex items-center justify-center gap-2 text-accent", children: [_jsx(CheckCircle, { className: "h-5 w-5" }), _jsx("span", { className: "font-medium", children: "Thank you for subscribing!" })] })) : (_jsxs("form", { onSubmit, className: "mt-8", children: [_jsxs("div", { className: "flex flex-col sm:flex-row gap-4 max-w-md mx-auto", children: [_jsx("input", { type, value, onChange: (e)=> setEmail(e.target.value), placeholder, className: "flex-1 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors", required), _jsxs("button", { type, className: "inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-medium tracking-wide hover:bg-primary-foreground/90 transition-colors", children, _jsx(ArrowRight, { className: "h-4 w-4" })] })] }), _jsx("p", { className: "mt-4 text-sm text-primary-foreground/60", children, you agree to our Privacy Policy. Unsubscribe anytime." })] }))] }) }) }));
}
