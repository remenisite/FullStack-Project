import Image from "next/image"
import { Instagram } from "lucide-react"

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
    likes: 234,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80",
    likes: 456,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    likes: 189,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
    likes: 567,
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80",
    likes: 321,
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=400&q=80",
    likes: 432,
  },
]

export function InstagramGallery() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-muted-foreground mb-4">
            <Instagram className="h-5 w-5" />
            <span className="text-sm font-medium tracking-wide">@remeni.fashion
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold">
            Follow Our Journey
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto">
            Get inspired by our latest looks and behind-the-scenes moments
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-primary-foreground" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
