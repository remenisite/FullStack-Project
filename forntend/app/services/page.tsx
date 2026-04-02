import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
  Scissors, 
  Package, 
  RefreshCw, 
  Shirt, 
  Gift, 
  Truck, 
  MessageCircle, 
  ArrowRight 
} from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Custom Tailoring",
    description: "Get the perfect fit with our bespoke tailoring service. Our expert craftsmen will create garments tailored specifically to your measurements and preferences.",
    features: ["Personalized measurements", "Fabric selection", "Multiple fittings", "4-6 week delivery"],
  },
  {
    icon: Shirt,
    title: "Personal Styling",
    description: "Work with our fashion consultants to curate a wardrobe that reflects your unique style. From everyday essentials to special occasions, we&apos;ve got you covered.",
    features: ["One-on-one consultation", "Style assessment", "Curated selections", "Ongoing support"],
  },
  {
    icon: Gift,
    title: "Gift Services",
    description: "Make every gift special with our premium gift wrapping and personalization options. Perfect for weddings, birthdays, and corporate gifting.",
    features: ["Luxury gift wrapping", "Personalized cards", "Gift registry", "Corporate packages"],
  },
  {
    icon: RefreshCw,
    title: "Alterations",
    description: "Breathe new life into your favorite pieces with our professional alteration services. We handle everything from simple hemming to complete restyling.",
    features: ["Expert alterations", "Quick turnaround", "Reasonable pricing", "Quality guarantee"],
  },
  {
    icon: Truck,
    title: "Express Delivery",
    description: "Need your order fast? Our express delivery service ensures your pieces arrive when you need them, wherever you are.",
    features: ["Same-day delivery (Dhaka)", "Next-day nationwide", "International shipping", "Real-time tracking"],
  },
  {
    icon: MessageCircle,
    title: "Style Consultation",
    description: "Not sure what suits you? Book a complimentary style consultation with our fashion experts and discover your perfect look.",
    features: ["Free 30-min session", "Color analysis", "Body type assessment", "Trend recommendations"],
  },
]

const process = [
  { step: "01", title: "Book a Consultation", description: "Schedule an appointment online or visit our store" },
  { step: "02", title: "Share Your Vision", description: "Tell us about your style preferences and requirements" },
  { step: "03", title: "Expert Guidance", description: "Our team crafts personalized recommendations for you" },
  { step: "04", title: "Perfect Results", description: "Receive your perfectly tailored pieces" },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
              What We Offer
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Experience luxury fashion with our comprehensive range of services, 
              designed to make your shopping experience truly exceptional.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 border border-border hover:border-primary hover:bg-secondary/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary text-primary-foreground mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.3em] text-primary-foreground/70 uppercase">
              Simple Process
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="text-6xl font-serif font-bold text-primary-foreground/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] border-t border-dashed border-primary-foreground/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                alt="Custom Tailoring"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
                Bespoke Experience
              </p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold leading-tight">
                Create Something
                <br />
                <span className="italic">Uniquely Yours</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Whether you&apos;re looking for a custom wedding outfit, a perfectly tailored suit, or 
                unique pieces that express your personal style, our bespoke service brings your 
                vision to life with exceptional craftsmanship.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Book a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border font-medium tracking-wide hover:bg-secondary transition-colors"
                >
                  Browse Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
              Have Questions?
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold">
              We&apos;re Here to Help
            </h2>
            <p className="mt-6 text-muted-foreground">
              Our customer service team is available to answer any questions about our services. 
              Reach out via email, phone, or visit our store.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
