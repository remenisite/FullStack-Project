import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedCollections } from "@/components/home/featured-collections"
import { TrendingProducts } from "@/components/home/trending-products"
import { NewArrivals } from "@/components/home/new-arrivals"
import { CategoryShowcase } from "@/components/home/category-showcase"
import { PromoBanner } from "@/components/home/promo-banner"
import { Testimonials } from "@/components/home/testimonials"
import { InstagramGallery } from "@/components/home/instagram-gallery"
import { Newsletter } from "@/components/home/newsletter"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedCollections />
      <TrendingProducts />
      <NewArrivals />
      <CategoryShowcase />
      <PromoBanner />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
      <Footer />
    </main>
  )
}
