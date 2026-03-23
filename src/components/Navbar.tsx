"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const products = [
  { name: "Command Projects", href: "#products", desc: "Project management, crews, scheduling" },
  { name: "Command Finance", href: "#products", desc: "Accounting, KPIs, tax, reporting" },
  { name: "Command CRM", href: "#products", desc: "Sales pipeline, clients, proposals" },
  { name: "Command Design", href: "#products", desc: "Design projects, assets, approvals" },
];

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#social-proof" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-surface-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className={`font-bold text-lg tracking-tight ${scrolled ? "text-ink" : "text-ink"}`}>
              Command <span className="gradient-text">PRO</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors rounded-lg hover:bg-surface-100">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-surface-200 p-2 animate-fade-in">
                  {products.map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      className="block px-4 py-3 rounded-lg hover:bg-surface-100 transition-colors"
                    >
                      <div className="font-semibold text-sm text-ink">{p.name}</div>
                      <div className="text-xs text-ink-muted mt-0.5">{p.desc}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors rounded-lg hover:bg-surface-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="https://ckcommand.vercel.app/sign-in" className="text-sm font-medium text-ink-muted hover:text-ink transition-colors px-4 py-2">
              Sign In
            </a>
            <a
              href="https://ckcommand.vercel.app/sign-up"
              className="text-sm font-semibold text-white bg-primary hover:bg-primary-dark px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-ink-muted hover:text-ink"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-surface-200 animate-fade-in">
          <div className="px-6 py-4 space-y-1">
            <p className="text-xs font-semibold text-ink-faint uppercase tracking-wider px-3 py-2">Products</p>
            {products.map((p) => (
              <a
                key={p.name}
                href={p.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-ink-muted hover:text-ink rounded-lg hover:bg-surface-100"
              >
                {p.name}
              </a>
            ))}
            <div className="border-t border-surface-200 my-2" />
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-ink-muted hover:text-ink rounded-lg hover:bg-surface-100"
              >
                {link.name}
              </a>
            ))}
            <div className="border-t border-surface-200 my-2" />
            <a
              href="https://ckcommand.vercel.app/sign-up"
              onClick={() => setMobileOpen(false)}
              className="block text-center text-sm font-semibold text-white bg-primary px-5 py-3 rounded-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
