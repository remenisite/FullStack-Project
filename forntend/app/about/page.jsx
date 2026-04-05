import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Award, Users, Heart, Sparkles } from "lucide-react"

const values = [
  {
    icon,
    title: "Quality Craftsmanship",
    description: "Every piece is crafted with meticulous attention to detail, using traditional techniques passed down through generations.",
  },
  {
    icon,
    title: "Community First",
    description: "We work directly with local artisans, ensuring fair wages and preserving traditional craftsmanship.",
  },
  {
    icon,
    title: "Sustainable Fashion",
    description: "Our commitment to sustainability means eco-friendly materials and ethical production practices.",
  },
  {
    icon,
    title: "Modern Heritage",
    description: "We blend traditional Bangladeshi aesthetics with contemporary design for the modern fashion enthusiast.",
  },
]

const milestones = [
  { year: "2018", title: "The Beginning", description: "Remeni was founded with a vision to bring Bangladeshi fashion to the world." },
  { year: "2020", title: "First Store", description: "Opened our flagship store in Dhaka, creating an immersive brand experience." },
  { year: "2022", title: "Global Reach", description: "Expanded internationally, shipping to over 50 countries worldwide." },
  { year: "2024", title: "Sustainability Pledge", description: "Achieved 100% sustainable sourcing across all product lines." },
]

const team = [
  { name: "Fatima Rahman", role: "Founder & Creative Director", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Karim Ahmed", role: "Head of Design", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Nadia Begum", role: "Sustainability Lead", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="relative h-[60vh] min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80"
            alt="Remeni Fashion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/30" />
          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-xl">
                <p className="text-sm font-medium tracking-[0.3em] text-primary-foreground/80 uppercase">
                  Our Story
                </p>
                <h1 className="mt-4 font-serif text-5xl sm:text-6xl font-semibold text-primary-foreground leading-tight">
                  Crafting
                  <br />
                  <span className="italic">Elegance
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
              <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
                About Remeni
              </p>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold leading-tight">
                Where Tradition
                <br />
                Meets Tomorrow
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Born in the heart of Bangladesh, Remeni represents the perfect harmony between our rich 
                cultural heritage and contemporary fashion sensibilities. We believe that clothing is more 
                than fabric—it&apos;s an expression of identity, a celebration of craftsmanship, and a 
                bridge between generations.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our journey began with a simple mission: to share the beauty of Bangladeshi fashion with 
                the world while empowering local artisans and promoting sustainable practices. Every thread 
                we weave tells a story of dedication, skill, and love for the craft.
              </p>
              <Link
                href="/products"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:gap-4 transition-all"
              >
                Explore Our Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Remeni Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
              What We Stand For
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mb-6">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 sm:p-12 bg-primary text-primary-foreground">
              <p className="text-sm font-medium tracking-[0.3em] text-primary-foreground/70 uppercase mb-4">
                Our Mission
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-4">
                Empowering Through Fashion
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                To create beautiful, sustainable fashion that celebrates Bangladeshi heritage while 
                empowering local artisans and promoting ethical practices. We strive to make luxury 
                fashion accessible without compromising on quality or values.
              </p>
            </div>
            <div className="p-8 sm:p-12 bg-secondary">
              <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase mb-4">
                Our Vision
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold mb-4">
                Fashion Without Borders
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a global ambassador of Bangladeshi fashion, inspiring a new generation of 
                designers and artisans while setting the standard for sustainable luxury in the 
                fashion industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
              Our Journey
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold">
              Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative">
                <div className="text-6xl font-serif font-bold text-accent/30 mb-2">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-sm font-medium text-accent mb-2">{milestone.year}</p>
                <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
              The People Behind Remeni
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative aspect-square overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
