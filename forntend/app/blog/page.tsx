import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"

const featuredPost = {
  id: "1",
  title: "The Art of Traditional Bangladeshi Weaving: A Journey Through Time",
  excerpt: "Discover the rich history and intricate techniques behind Bangladesh&apos;s most celebrated textile traditions, from jamdani to muslin.",
  image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80",
  author: "Fatima Rahman",
  date: "March 15, 2026",
  readTime: "8 min read",
  category: "Heritage",
}

const blogPosts = [
  {
    id: "2",
    title: "Summer Style Guide: Staying Cool & Chic",
    excerpt: "Expert tips on building a summer wardrobe that balances comfort with elegance.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    author: "Nadia Begum",
    date: "March 12, 2026",
    readTime: "5 min read",
    category: "Style",
  },
  {
    id: "3",
    title: "Sustainable Fashion: Our Commitment to the Planet",
    excerpt: "How Remeni is leading the way in eco-friendly fashion practices.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
    author: "Karim Ahmed",
    date: "March 10, 2026",
    readTime: "6 min read",
    category: "Sustainability",
  },
  {
    id: "4",
    title: "The Perfect Panjabi: A Complete Buying Guide",
    excerpt: "Everything you need to know about choosing the perfect traditional Panjabi.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
    author: "Rahman Khan",
    date: "March 8, 2026",
    readTime: "7 min read",
    category: "Guide",
  },
  {
    id: "5",
    title: "Behind the Scenes: Meet Our Artisans",
    excerpt: "A glimpse into the lives of the skilled craftsmen who create Remeni pieces.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    author: "Fatima Rahman",
    date: "March 5, 2026",
    readTime: "4 min read",
    category: "People",
  },
  {
    id: "6",
    title: "Wedding Season: Traditional Meets Modern",
    excerpt: "Stunning outfit ideas for the modern bride and groom.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80",
    author: "Nadia Begum",
    date: "March 1, 2026",
    readTime: "9 min read",
    category: "Wedding",
  },
]

const categories = [
  "All",
  "Style",
  "Heritage",
  "Sustainability",
  "Guide",
  "Wedding",
  "People",
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
              Stories & Inspiration
            </p>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold">
              The Remeni Journal
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Explore fashion insights, styling tips, and stories from the world of Bangladeshi fashion.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href={`/blog/${featuredPost.id}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-medium">
                  Featured
                </div>
              </div>
              <div>
                <span className="text-sm font-medium text-accent">{featuredPost.category}</span>
                <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold leading-tight group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 font-medium group-hover:gap-4 transition-all">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold mb-12">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="group">
                <article className="bg-card overflow-hidden">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-semibold leading-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-8 py-4 border border-border font-medium tracking-wide hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold">
              Never Miss a Story
            </h2>
            <p className="mt-4 text-primary-foreground/80">
              Subscribe to our newsletter for the latest fashion insights, styling tips, and exclusive content.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
