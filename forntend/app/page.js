import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { TrendingProducts } from "@/components/home/trending-products";
import { NewArrivals } from "@/components/home/new-arrivals";
import { CategoryShowcase } from "@/components/home/category-showcase";
import { PromoBanner } from "@/components/home/promo-banner";
import { Testimonials } from "@/components/home/testimonials";
import { InstagramGallery } from "@/components/home/instagram-gallery";
import { Newsletter } from "@/components/home/newsletter";
export default function HomePage() {
    return (_jsxs("main", { className: "min-h-screen", children: [_jsx(Navbar, {}), _jsx(HeroSection, {}), _jsx(FeaturedCollections, {}), _jsx(TrendingProducts, {}), _jsx(NewArrivals, {}), _jsx(CategoryShowcase, {}), _jsx(PromoBanner, {}), _jsx(Testimonials, {}), _jsx(InstagramGallery, {}), _jsx(Newsletter, {}), _jsx(Footer, {})] }));
}
