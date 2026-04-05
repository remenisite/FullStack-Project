import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon, } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
function Pagination({ className, ...props }) {
    return (_jsx("nav", { role, "aria-label", "data-slot", className: cn('mx-auto flex w-full justify-center', className), ...props }));
}
function PaginationContent({ className, ...props }) {
    return (_jsx("ul", { "data-slot": "pagination-content", className: cn('flex flex-row items-center gap-1', className), ...props }));
}
function PaginationItem({ ...props }) {
    return _jsx("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({ className, isActive, size= 'icon', ...props }) {
    return (_jsx("a", { "aria-current": isActive ? 'page' , "data-slot": "pagination-link", "data-active", className: cn(buttonVariants({
            variant: isActive ? 'outline' ), className), ...props }));
}
function PaginationPrevious({ className, ...props }) {
    return (_jsxs(PaginationLink, { "aria-label", className: cn('gap-1 px-2.5 sm:pl-2.5', className), ...props, children: [_jsx(ChevronLeftIcon, {}), _jsx("span", { className)] }));
}
function PaginationNext({ className, ...props }) {
    return (_jsxs(PaginationLink, { "aria-label", className: cn('gap-1 px-2.5 sm:pr-2.5', className), ...props, children: [_jsx("span", { className), _jsx(ChevronRightIcon, {})] }));
}
function PaginationEllipsis({ className, ...props }) {
    return (_jsxs("span", { "aria-hidden", "data-slot": "pagination-ellipsis", className: cn('flex size-9 items-center justify-center', className), ...props, children: [_jsx(MoreHorizontalIcon, { className: "size-4" }), _jsx("span", { className: "sr-only", children)] }));
}
export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis, };
