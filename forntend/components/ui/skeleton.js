import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
function Skeleton({ className, ...props }) {
    return (_jsx("div", { "data-slot", className: cn('bg-accent animate-pulse rounded-md', className), ...props }));
}
export { Skeleton };
