"use client";
import {
  FolderKanban,
  Calculator,
  Users,
  Palette,
  MessageSquare,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const products = [
  {
    name: "Command Projects",
    tagline: "Project management, built for the field.",
    description: "Track every project from lead to completion. Tasks, daily logs, scheduling, and field documentation in one place.",
    icon: FolderKanban,
    lightColor: "bg-primary/5 border-primary/10",
    iconColor: "text-primary",
    color: "from-primary to-primary-dark",
    features: [
      "Project Tracking & Scheduling",
      "Task Management & Assignments",
      "Daily Logs with Photos",
      "Team & Vendor Management",
      "Scope of Work & Change Orders",
      "Map View & Field Tracking",
    ],
  },
  {
    name: "Command Finance",
    tagline: "Replace QuickBooks. Save $170+/mo.",
    description: "Professional invoicing, expense tracking, purchase orders, change orders, and financial reports — all connected to your projects.",
    icon: Calculator,
    lightColor: "bg-cta/5 border-cta/10",
    iconColor: "text-cta",
    color: "from-cta to-cta-dark",
    features: [
      "Invoicing & Payment Tracking",
      "Expense Tracking by Project",
      "Vendor Purchase Orders",
      "Change Order Management",
      "Revenue & Margin Reports",
      "AR Aging & Profitability",
    ],
  },
  {
    name: "Command CRM",
    tagline: "Every client relationship, managed.",
    description: "Track leads through your sales pipeline, book appointments, and give clients their own branded portal with real-time project updates.",
    icon: Users,
    lightColor: "bg-secondary/5 border-secondary/10",
    iconColor: "text-secondary",
    color: "from-secondary to-secondary-dark",
    features: [
      "CRM & Deal Pipeline",
      "Appointment Booking & Calendar",
      "Branded Client Portals",
      "Vendor Portal & Sub Access",
      "Quality Checklists",
      "Map View & Locations",
    ],
  },
  {
    name: "Command Design",
    tagline: "Design studio for remodelers.",
    description: "Mood boards, color palettes, material catalogs, fixture selections, and design packages — present like a pro.",
    icon: Palette,
    lightColor: "bg-pink-50 border-pink-100",
    iconColor: "text-pink-500",
    color: "from-pink-500 to-pink-600",
    features: [
      "Mood Boards & Inspiration",
      "Color Palettes & Swatches",
      "Materials & Finishes Catalog",
      "Fixture & Selection Tracking",
      "Design Packages for Clients",
      "Photo Documentation",
    ],
  },
  {
    name: "Command Comms",
    tagline: "Your team, always connected.",
    description: "Project-based team chat, a real-time war room, company-wide social feed, AI assistant, and centralized file management.",
    icon: MessageSquare,
    lightColor: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    color: "from-amber-500 to-amber-600",
    features: [
      "Team Chat by Project",
      "War Room (Real-Time Command)",
      "Company Social Feed",
      "AI Assistant & Insights",
      "Centralized File Management",
      "Personal Task List",
    ],
  },
  {
    name: "Command Playbook",
    tagline: "Your company brain, documented.",
    description: "Standard operating procedures, step-by-step instructions, company policies, directives, and a knowledge base — all role-based.",
    icon: BookOpen,
    lightColor: "bg-sky-50 border-sky-100",
    iconColor: "text-sky-600",
    color: "from-sky-500 to-sky-600",
    features: [
      "Processes & SOPs",
      "Step-by-Step Procedures",
      "Company Policies & Acknowledgment",
      "Company Directives",
      "Knowledge Base",
      "Role-Based Access Control",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">36 Tools in 6 Categories</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            Everything you need.{" "}
            <span className="gradient-text">Nothing you don&apos;t.</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            Each module is powerful on its own. Together, they replace your entire software stack.
          </p>
        </div>

        {/* Product cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-white rounded-2xl border border-surface-200 hover:border-surface-300 p-8 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border ${product.lightColor} mb-6`}>
                <product.icon className={`w-6 h-6 ${product.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-ink mb-2">{product.name}</h3>
              <p className="text-sm font-medium text-primary mb-3">{product.tagline}</p>
              <p className="text-sm text-ink-muted leading-relaxed mb-6">{product.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-ink-light">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${product.iconColor}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Gradient accent line */}
              <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${product.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
