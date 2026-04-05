'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { ThemeProvider, } from 'next-themes';
export function ThemeProvider({ children, ...props }) {
    return _jsx(NextThemesProvider, { ...props, children);
}
