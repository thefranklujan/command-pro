"use client";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-cta animate-pulse" />
            <span className="text-sm font-medium text-primary">36 tools. One platform. $99/mo.</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-ink leading-[1.05] animate-fade-up">
            One platform.
            <br />
            <span className="gradient-text">Zero app switching.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-ink-muted max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Projects, invoicing, CRM, design, team chat, and more — unified in one ecosystem built for contractors. No more juggling 8 different logins.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="#pricing"
              className="group flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="group flex items-center gap-2 px-8 py-4 bg-white hover:bg-surface-100 text-ink font-semibold rounded-xl border border-surface-200 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 text-primary" />
              See All 36 Tools
            </a>
          </div>

          {/* Product pills */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.45s" }}>
            {[
              { name: "Projects", color: "bg-primary/10 text-primary border-primary/20" },
              { name: "Finance", color: "bg-cta/10 text-cta-dark border-cta/20" },
              { name: "CRM", color: "bg-secondary/10 text-secondary border-secondary/20" },
              { name: "Design", color: "bg-pink-50 text-pink-600 border-pink-200" },
              { name: "Comms", color: "bg-amber-50 text-amber-600 border-amber-200" },
              { name: "Playbook", color: "bg-sky-50 text-sky-600 border-sky-200" },
            ].map((product) => (
              <span
                key={product.name}
                className={`px-4 py-2 rounded-full text-sm font-semibold border ${product.color}`}
              >
                Command {product.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
