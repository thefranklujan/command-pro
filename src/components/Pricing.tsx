"use client";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/user/mo",
    description: "For solo operators and small crews getting organized.",
    features: [
      "Command Dashboard",
      "Project Management",
      "Task Management",
      "Daily Logs",
      "File Management",
      "Team Chat",
      "Up to 3 users",
      "Add any Pro tool for $5/mo each",
    ],
    cta: "Start Free Trial",
    popular: false,
    style: "bg-white border-surface-200",
    ctaStyle: "bg-white hover:bg-surface-100 text-ink border border-surface-200",
  },
  {
    name: "Pro",
    price: "$99",
    period: "/user/mo",
    description: "For growing companies that need the full toolkit.",
    features: [
      "Everything in Starter",
      "Invoicing & Expenses",
      "Client Portals",
      "Scope of Work & Gantt",
      "CRM & Appointments",
      "AI Assistant",
      "Design Studio",
      "Company Playbook",
      "Checklists & Vendor Portal",
      "Unlimited users",
    ],
    cta: "Start Free Trial",
    popular: true,
    style: "bg-gradient-hero border-primary/20 text-white",
    ctaStyle: "bg-white hover:bg-surface text-primary",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale operations with custom needs.",
    features: [
      "Everything in Pro",
      "Dedicated onboarding",
      "Custom integrations",
      "Priority support",
      "SSO & advanced security",
      "SLA guarantee",
      "White-label options",
      "Unlimited organizations",
    ],
    cta: "Contact Sales",
    popular: false,
    style: "bg-white border-surface-200",
    ctaStyle: "bg-white hover:bg-surface-100 text-ink border border-surface-200",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">One Price. Every Tool.</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-ink tracking-tight">
            Stop paying for{" "}
            <span className="gradient-text">8 subscriptions.</span>
          </h2>
          <p className="mt-4 text-lg text-ink-muted">
            All plans include a 14-day free trial — no credit card required.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 lg:p-10 transition-all hover:shadow-xl ${plan.style} ${
                plan.popular ? "lg:scale-105 shadow-xl" : "hover:-translate-y-1"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cta text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              {/* Plan name */}
              <h3 className={`text-lg font-bold mb-2 ${plan.popular ? "text-white" : "text-ink"}`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-3">
                <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-ink"}`}>
                  {plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm ${plan.popular ? "text-white/70" : "text-ink-muted"}`}>
                    {plan.period}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className={`text-sm mb-8 ${plan.popular ? "text-white/80" : "text-ink-muted"}`}>
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-cta-light" : "text-cta"}`} />
                    <span className={`text-sm ${plan.popular ? "text-white/90" : "text-ink-light"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg ${plan.ctaStyle}`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-sm text-ink-muted mt-10">
          14-day free trial on all plans. No credit card required. No contracts — cancel anytime.
        </p>
      </div>
    </section>
  );
}
