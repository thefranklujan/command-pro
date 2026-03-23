import type { Metadata } from "next";
import { getModuleBySlug } from "@/data/modules";
import ModulePage from "@/components/ModulePage";

export const dynamic = "force-dynamic";

const moduleData = getModuleBySlug("finance")!;

export const metadata: Metadata = {
  title: `${moduleData.name} | Command PRO`,
  description: moduleData.heroDescription,
};

export default function FinancePage() {
  return <ModulePage module={moduleData} />;
}
