"use client";
import {
  Zap,
  Shield,
  BarChart3,
  Smartphone,
  RefreshCw,
  Lock,
  Globe,
  Layers,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "One Platform, 36 Tools",
    description: "Project management, invoicing, CRM, design studio, team chat, AI assistant, and 30 more tools — all sharing the same data.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description: "See your projects, tasks, invoices, team activity, revenue, margins, and AR aging — all in one dashboard.",
  },
  {
    icon: Clock,
    title: "Go Live in a Weekend",
    description: "48 hours from sign-up to full operation. No setup calls, no IT department. Import your data or start fresh.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant, 256-bit encryption, role-based access control. Admin, partner, field, and vendor roles built in.",
  },
  {
    icon: Smartphone,
    title: "Works on Every Device",
    description: "Full iOS app plus responsive web. Daily logs from the field, invoicing from the office, dashboards from anywhere.",
  },
  {
    icon: RefreshCw,
    title: "Cancel Your Other Apps",
    description: "Most teams eliminate 5-8 subscriptions in month one. Import from QuickBooks, Buildertrend, Monday.com, and more.",
  },
  {
    icon: Zap,
    title: "AI Assistant Built In",
    description: "Ask questions about your projects, get summaries, surface insights. Your data works harder so you don't have to.",
  },
  {
    icon: Lock,
    title: "Your Data Is Yours",
    description: "Full export anytime. No vendor lock-in. 30-day data retention after cancellation. No contracts, month-to-month only.",
  },
  {
    icon: Globe,
    title: "Client & Vendor Portals",
    description: "Branded portals for clients to see progress, approve changes, and message you. Vendor portal for subs to access assigned work.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Teams Switch</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            Built for contractors.{" "}
            <span className="gradient-text">By contractors.</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Every feature exists because we got tired of the same problems you did.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl border border-surface-200 hover:border-primary/20 p-8 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/5 border border-primary/10 mb-5 group-hover:bg-primary/10 transition-colors">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{feature.title}</h3>
              <p className="text-sm text-ink-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
