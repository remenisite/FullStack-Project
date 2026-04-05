import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Inter, Playfair_Display } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
const inter= Inter({
    subsets],
    variable: '--font-inter',
});
const playfair= Playfair_Display({
    subsets],
    variable: '--font-playfair',
});
export const metadata= {
    title,
    description: 'Discover timeless elegance with Remeni - Premium Bangladeshi fashion for the modern soul',
    generator,
    icons{
        icon{
                url: '/icon-light-32x32.png',
                media: '(prefers-color-scheme)',
            },
            {
                url: '/icon-dark-32x32.png',
                media: '(prefers-color-scheme)',
            },
            {
                url: '/icon.svg',
                type: 'image/svg+xml',
            },
        ],
        apple: '/apple-icon.png',
    },
};
export default function RootLayout({ children, }) {
    return (_jsx("html", { lang, className: `${inter.variable} ${playfair.variable}`, children: _jsxs("body", { className: "font-sans antialiased", children, _jsx(Analytics, {})] }) }));
}
