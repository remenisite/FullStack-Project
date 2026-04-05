"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
const contactInfo= [
    {
        icon,
        title,
        details, "Dhaka 1205, Bangladesh"],
    },
    {
        icon,
        title,
        details: ["+880 1234 567890", "+880 9876 543210"],
    },
    {
        icon,
        title,
        details: ["hello@remeni.com", "support@remeni.com"],
    },
    {
        icon,
        title,
        details: ["Mon - Sat: 10AM - 9PM", "Sunday: 11AM - 7PM"],
    },
];
export default function ContactPage() {
    const [formData, setFormData]= useState({
        name,
        email,
        phone,
        subject,
        message,
    });
    const [isSubmitted, setIsSubmitted]= useState(false);
    const handleSubmit= (e)=> {
        e.preventDefault();
        setIsSubmitted(true);
    };
    const handleChange= (e)=> {
        setFormData({ ...formData, [e.target.name]);
    };
    return (_jsxs("main", { className: "min-h-screen bg-background", children: [_jsx(Navbar, {}), _jsx("section", { className: "pt-20 bg-secondary/50", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24", children: _jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [_jsx("p", { className: "text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase", children), _jsx("h1", { className: "mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold", children), _jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "Have a question or need assistance? We'd love to hear from you." })] }) }) }), _jsx("section", { className: "py-16", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: contactInfo.map((info)=> (_jsxs("div", { className: "p-6 text-center border border-border hover:border-primary transition-colors", children: [_jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full mb-4", children: _jsx(info.icon, { className: "h-5 w-5" }) }), _jsx("h3", { className: "font-semibold mb-2", children), info.details.map((detail, index)=> (_jsx("p", { className: "text-sm text-muted-foreground", children, index)))] }, info.title))) }) }) }), _jsx("section", { className: "py-16", children: _jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12", children: [_jsxs("div", { children: [_jsx("h2", { className: "font-serif text-3xl font-semibold mb-6", children), isSubmitted ? (_jsxs("div", { className: "p-8 bg-secondary/50 text-center", children: [_jsx(CheckCircle, { className: "h-12 w-12 mx-auto text-accent mb-4" }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: "Message Sent!" }), _jsx("p", { className: "text-muted-foreground", children), _jsx("button", { onClick: ()=> {
                                                    setIsSubmitted(false);
                                                    setFormData({ name, email, phone, subject, message);
                                                }, className: "mt-4 text-sm font-medium hover:text-accent transition-colors", children)] })) : (_jsxs("form", { onSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor, className: "block text-sm font-medium mb-2", children), _jsx("input", { type, id, name, value, onChange, required, className: "w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-primary transition-colors", placeholder)] }), _jsxs("div", { children: [_jsx("label", { htmlFor, className: "block text-sm font-medium mb-2", children), _jsx("input", { type, id, name, value, onChange, required, className: "w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-primary transition-colors", placeholder: "john@example.com" })] })] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor, className: "block text-sm font-medium mb-2", children), _jsx("input", { type, id, name, value, onChange, className: "w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-primary transition-colors", placeholder: "+880 1234 567890" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor, className: "block text-sm font-medium mb-2", children), _jsxs("select", { id, name, value, onChange, required, className: "w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-primary transition-colors", children: [_jsx("option", { value, children), _jsx("option", { value, children), _jsx("option", { value, children), _jsx("option", { value, children), _jsx("option", { value, children), _jsx("option", { value, children)] })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor, className: "block text-sm font-medium mb-2", children), _jsx("textarea", { id, name, value, onChange, required, rows, className: "w-full px-4 py-3 border border-border bg-transparent focus:outline-none focus:border-primary transition-colors resize-none", placeholder: "How can we help you?" })] }), _jsxs("button", { type, className: "inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors", children: [_jsx(Send, { className: "h-4 w-4" }), "Send Message"] })] }))] }), _jsxs("div", { className: "relative aspect-square lg:aspect-auto bg-secondary overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx(MapPin, { className: "h-12 w-12 mx-auto text-muted-foreground mb-4" }), _jsx("p", { className: "text-lg font-semibold", children), _jsx("p", { className: "text-sm text-muted-foreground mt-2", children, Dhaka 1205" })] }) }), _jsx("div", { className: "absolute inset-0 opacity-10", style{
                                            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                                            backgroundSize)] })] }) }) }), _jsx(Footer, {})] }));
}
