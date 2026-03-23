"use client";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { modules } from "@/data/modules";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FeaturesHub() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-cta/5 to-primary/5 blur-3xl translate-y-1/2 -translate-x-1/3" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-surface-200 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              <span className="text-xs font-semibold text-ink-muted">
                6 Modules &middot; 36+ Tools &middot; One Platform
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
              Every tool your remodeling{" "}
              <span className="gradient-text">business needs</span>
            </h1>

            <p className="text-lg lg:text-xl text-ink-muted max-w-2xl mx-auto mb-10">
              Explore each module below. Click into any module to see every feature in detail.
            </p>

            <a
              href="https://ckcommand.vercel.app/sign-up"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Module Cards */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module) => (
                <a
                  key={module.slug}
                  href={`/features/${module.slug}`}
                  className="group relative bg-white rounded-2xl border border-surface-200 hover:border-surface-300 p-8 transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border ${module.lightColor} mb-6`}>
                    <module.icon className={`w-6 h-6 ${module.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-ink mb-2">{module.name}</h3>
                  <p className={`text-sm font-medium mb-3 ${module.iconColor}`}>
                    {module.tagline}
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed mb-6">
                    {module.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2 mb-6">
                    {module.features.map((feature) => (
                      <li
                        key={feature.name}
                        className="flex items-center gap-2.5 text-sm text-ink-light"
                      >
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${module.iconColor}`} />
                        {feature.name}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Explore {module.shortName}
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${module.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
              From chaos to command in one weekend
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Start your 14-day free trial. No credit card required. Replace 8+ apps for $99/mo.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://ckcommand.vercel.app/sign-up"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-light px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl transition-all"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
