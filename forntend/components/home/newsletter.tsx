"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium tracking-[0.3em] text-primary-foreground/70 uppercase">
            Stay Connected
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold">
            Join Our Newsletter
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Subscribe to receive updates on new arrivals, exclusive offers, 
            and styling tips from our fashion experts.
          </p>

          {isSubmitted ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-accent">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-medium tracking-wide hover:bg-primary-foreground/90 transition-colors"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-4 text-sm text-primary-foreground/60">
                By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
