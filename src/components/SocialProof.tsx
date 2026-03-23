"use client";
import { Star } from "lucide-react";

const stats = [
  { value: "10x", label: "Faster than switching between apps" },
  { value: "4-in-1", label: "Products in one platform" },
  { value: "99.9%", label: "Uptime guaranteed" },
  { value: "24/7", label: "Support when you need it" },
];

const testimonials = [
  {
    quote: "We replaced QuickBooks, Monday, and three other tools. Our team saves 15 hours a week just by having everything in one place.",
    name: "Marcus Chen",
    role: "CEO, Pacific Construction",
    rating: 5,
  },
  {
    quote: "The finance module alone paid for itself in the first month. Having project data and accounting connected is a game changer.",
    name: "Sarah Williams",
    role: "CFO, Apex Interiors",
    rating: 5,
  },
  {
    quote: "My field crews actually use this. That's never happened before with any project management tool we've tried.",
    name: "David Reyes",
    role: "Operations Manager, Reyes Building Co",
    rating: 5,
  },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20 lg:mb-28">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text mb-2">{stat.value}</div>
              <p className="text-sm text-ink-muted font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            Loved by teams{" "}
            <span className="gradient-text">who build.</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface rounded-2xl border border-surface-200 p-8 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-ink leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>

              {/* Author */}
              <div>
                <div className="font-semibold text-ink text-sm">{t.name}</div>
                <div className="text-xs text-ink-muted mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
