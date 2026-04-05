"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
const categories= [
    { id, name,
    { id, name,
    { id, name,
    { id, name,
];
const types= [
    { id, name,
    { id, name,
    { id, name,
    { id, name,
    { id, name,
    { id, name,
    { id, name,
];
const priceRanges= [
    { min, max, label,
    { min, max, label: "Under $50" },
    { min, max, label: "$50 - $100" },
    { min, max, label: "$100 - $200" },
    { min, max, label: "$200+" },
];
export function ProductFilters({ filters, onFilterChange }) {
    return (_jsxs("div", { className: "space-y-8", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider mb-4", children), _jsx("div", { className: "space-y-2", children: categories.map((category)=> (_jsx("button", { onClick: ()=> onFilterChange({ ...filters, category), className: cn("block w-full text-left px-3 py-2 text-sm transition-colors", filters.category=== category.id
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-secondary"), children, category.id))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider mb-4", children), _jsx("div", { className: "space-y-2", children: priceRanges.map((range)=> (_jsx("button", { onClick: ()=> onFilterChange({
                                ...filters,
                                priceRange, range.max],
                            }), className: cn("block w-full text-left px-3 py-2 text-sm transition-colors", filters.priceRange[0]=== range.min &&
                                filters.priceRange[1]=== range.max
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-secondary"), children, range.label))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-semibold uppercase tracking-wider mb-4", children), _jsx("div", { className: "space-y-2", children: types.map((type)=> (_jsx("button", { onClick: ()=> onFilterChange({ ...filters, type), className: cn("block w-full text-left px-3 py-2 text-sm transition-colors", filters.type=== type.id
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-secondary"), children, type.id))) })] }), _jsx("button", { onClick: ()=> onFilterChange({
                    category,
                    priceRange, 500],
                    type,
                    sort,
                }), className: "w-full px-4 py-3 border border-border text-sm font-medium hover:bg-secondary transition-colors", children)] }));
}
