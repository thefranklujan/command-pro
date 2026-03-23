"use client";
import {
  FolderKanban,
  Calculator,
  Users,
  Palette,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const products = [
  {
    name: "Command Projects",
    tagline: "Project management, built for the field.",
    description: "Manage projects, tasks, crews, vendors, and daily logs from one place. Real-time visibility into every job.",
    icon: FolderKanban,
    color: "from-primary to-primary-dark",
    lightColor: "bg-primary/5 border-primary/10",
    iconColor: "text-primary",
    features: [
      "Projects & Job Tracking",
      "Tasks & Assignments",
      "Daily Logs & Checklists",
      "Team & Vendor Management",
      "Scope of Work & Change Orders",
      "Reports & Playbook",
    ],
  },
  {
    name: "Command Finance",
    tagline: "Accounting that actually makes sense.",
    description: "Invoicing, expenses, budgets, P&L, balance sheets, tax prep — everything QuickBooks does, without the headache.",
    icon: Calculator,
    color: "from-cta to-cta-dark",
    lightColor: "bg-cta/5 border-cta/10",
    iconColor: "text-cta",
    features: [
      "Invoicing & Billing",
      "Expense Tracking",
      "P&L & Balance Sheet",
      "Cash Flow Reports",
      "Tax Categories & Reports",
      "Financial KPIs",
    ],
  },
  {
    name: "Command CRM",
    tagline: "Every client relationship, managed.",
    description: "Track leads, manage pipelines, send proposals, and give clients their own portal. No more spreadsheet CRMs.",
    icon: Users,
    color: "from-secondary to-secondary-dark",
    lightColor: "bg-secondary/5 border-secondary/10",
    iconColor: "text-secondary",
    features: [
      "Lead Pipeline",
      "Client Management",
      "Client Portals",
      "Proposals & Quotes",
      "Communication History",
    ],
  },
  {
    name: "Command Design",
    tagline: "Design projects, organized.",
    description: "Manage design assets, mood boards, client approvals, and brand guidelines in one beautiful workspace.",
    icon: Palette,
    color: "from-pink-500 to-pink-600",
    lightColor: "bg-pink-50 border-pink-100",
    iconColor: "text-pink-500",
    features: [
      "Design Projects",
      "Asset Library",
      "Mood Boards",
      "Client Approvals",
      "Brand Management",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Ecosystem</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            Four products.{" "}
            <span className="gradient-text">One platform.</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Each product is powerful on its own. Together, they replace your entire software stack.
          </p>
        </div>

        {/* Product cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-white rounded-2xl border border-surface-200 hover:border-surface-300 p-8 lg:p-10 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border ${product.lightColor} mb-6`}>
                <product.icon className={`w-6 h-6 ${product.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-ink mb-2">{product.name}</h3>
              <p className="text-sm font-medium text-primary mb-3">{product.tagline}</p>
              <p className="text-ink-muted leading-relaxed mb-6">{product.description}</p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-ink-light">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${product.iconColor}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#pricing"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group/link"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>

              {/* Gradient accent line */}
              <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
