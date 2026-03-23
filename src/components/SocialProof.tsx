"use client";
import { Star } from "lucide-react";

const stats = [
  { value: "36", label: "Integrated Tools" },
  { value: "8", label: "Apps Replaced" },
  { value: "$170+", label: "Saved Per Month" },
  { value: "14", label: "Day Free Trial" },
];

const testimonials = [
  {
    quote: "Command PRO replaced 5 different apps for us. Everything we need is in one place now.",
    name: "Michael Torres",
    role: "General Remodeler",
    rating: 5,
  },
  {
    quote: "The client portal alone has saved us hours of phone calls every week. Clients love the transparency.",
    name: "Sarah Chen",
    role: "Project Manager",
    rating: 5,
  },
  {
    quote: "Daily logs from the field show up in real time. No more chasing down end-of-day reports.",
    name: "James Wilson",
    role: "Operations Director",
    rating: 5,
  },
];

const appsReplaced = [
  { name: "Buildertrend", cost: "$99/mo" },
  { name: "QuickBooks", cost: "$30/mo" },
  { name: "Slack", cost: "$8/mo" },
  { name: "Monday.com", cost: "$24/mo" },
  { name: "Google Drive", cost: "$12/mo" },
  { name: "Calendly", cost: "$16/mo" },
  { name: "Raken", cost: "$35/mo" },
  { name: "Spreadsheets", cost: "$0" },
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

        {/* Apps you can replace */}
        <div className="mb-20 lg:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Apps You Can Cancel</p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
              Replace ~$269/mo{" "}
              <span className="gradient-text">with $99/mo.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {appsReplaced.map((app) => (
              <div key={app.name} className="bg-surface rounded-xl border border-surface-200 p-4 text-center">
                <div className="text-sm font-semibold text-ink mb-1">{app.name}</div>
                <div className="text-xs text-ink-muted line-through">{app.cost}</div>
              </div>
            ))}
          </div>
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
