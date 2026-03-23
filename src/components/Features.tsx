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
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Unified Platform",
    description: "All your tools share the same data, same login, same workspace. No more juggling 5 different apps.",
  },
  {
    icon: BarChart3,
    title: "Real-Time KPIs",
    description: "Dashboards that pull from every product. See your entire business health at a glance.",
  },
  {
    icon: Workflow,
    title: "Automated Workflows",
    description: "When a project closes, the invoice generates. When a lead converts, the project creates. Everything connects.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant, 256-bit encryption, role-based access control. Your data stays yours.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Full functionality on every device. Manage your business from the field, the office, or the couch.",
  },
  {
    icon: RefreshCw,
    title: "Seamless Migration",
    description: "Import from QuickBooks, Monday.com, Salesforce, and more. We handle the heavy lifting.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on modern infrastructure. Pages load in milliseconds, not seconds. No lag, no waiting.",
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    description: "Admins, partners, and field workers each see exactly what they need. Nothing more, nothing less.",
  },
  {
    icon: Globe,
    title: "Multi-Org Support",
    description: "Run multiple businesses from one account. Each org gets its own isolated data and settings.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Command PRO</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            Built different.{" "}
            <span className="gradient-text">By design.</span>
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
