import type { Metadata } from "next";
import FeaturesHub from "./FeaturesHub";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Modules | Command PRO",
  description:
    "Explore all 6 modules and 36+ tools inside Command PRO. Project management, finance, CRM, design, communications, and company playbook — purpose-built for remodelers.",
};

export default function FeaturesPage() {
  return <FeaturesHub />;
}
