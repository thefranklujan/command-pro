"use client";
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react";
import type { ModuleData } from "@/data/modules";
import { modules } from "@/data/modules";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ModuleHero({ module }: { module: ModuleData }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${module.gradientBg}`} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Back link */}
          <a
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Modules
          </a>

          {/* Icon + badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl border ${module.lightColor}`}>
              <module.icon className={`w-7 h-7 ${module.iconColor}`} />
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${module.iconColor}`}>
              {module.shortName} Module
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.1] mb-4">
            {module.name.replace("Command ", "")}
            <span className="block gradient-text">{module.tagline}</span>
          </h1>

          <p className="text-lg lg:text-xl text-ink-muted leading-relaxed mb-8 max-w-2xl">
            {module.heroDescription}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://ckcommand.vercel.app/sign-up"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark px-7 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-ink bg-white hover:bg-surface-100 border border-surface-200 px-7 py-3.5 rounded-xl transition-all"
            >
              See All Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ModuleStats({ module }: { module: ModuleData }) {
  return (
    <section className="py-12 bg-white border-y border-surface-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {module.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl lg:text-4xl font-extrabold gradient-text mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-ink-muted font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleFeatures({ module }: { module: ModuleData }) {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className={`text-sm font-semibold uppercase tracking-wider mb-3 ${module.iconColor}`}>
            {module.features.length} Powerful Features
          </p>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-ink tracking-tight text-balance">
            Everything inside{" "}
            <span className="gradient-text">{module.name}</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Each feature is purpose-built for remodelers and contractors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {module.features.map((feature, i) => (
            <div
              key={feature.name}
              className="group relative bg-white rounded-2xl border border-surface-200 hover:border-surface-300 p-8 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="text-4xl mb-5">{feature.icon}</div>
              <h3 className="text-lg font-bold text-ink mb-3">{feature.name}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                {feature.description}
              </p>
              <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${module.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleAppsReplaced({ module }: { module: ModuleData }) {
  return (
    <section className="py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-ink tracking-tight">
            Apps you can <span className="gradient-text">cancel</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            {module.name} replaces these tools — saving you money and headaches.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {module.appsReplaced.map((app) => (
            <div
              key={app}
              className="relative bg-white rounded-xl border border-surface-200 px-8 py-5 text-center"
            >
              <span className="text-lg font-semibold text-ink-faint line-through decoration-red-400 decoration-2">
                {app}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCTA({ module }: { module: ModuleData }) {
  // Find adjacent modules for navigation
  const currentIndex = modules.findIndex((m) => m.slug === module.slug);
  const nextModule = modules[(currentIndex + 1) % modules.length];
  const prevModule = modules[(currentIndex - 1 + modules.length) % modules.length];

  return (
    <section className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
          Ready to try {module.name}?
        </h2>
        <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
          Start your 14-day free trial. No credit card required. Cancel anytime.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="https://ckcommand.vercel.app/sign-up"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-primary hover:bg-primary-light px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/features"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl transition-all"
          >
            See All Modules
          </a>
        </div>

        {/* Module navigation */}
        <div className="border-t border-white/10 pt-10">
          <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
            Explore Other Modules
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href={`/features/${prevModule.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {prevModule.shortName}
            </a>
            <span className="w-px h-5 bg-white/20" />
            <a
              href={`/features/${nextModule.slug}`}
              className="flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              {nextModule.shortName}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ModulePage({ module }: { module: ModuleData }) {
  return (
    <>
      <Navbar />
      <main>
        <ModuleHero module={module} />
        <ModuleStats module={module} />
        <ModuleFeatures module={module} />
        <ModuleAppsReplaced module={module} />
        <ModuleCTA module={module} />
      </main>
      <Footer />
    </>
  );
}
