"use client";
import { getModuleBySlug } from "@/data/modules";
import ModulePage from "@/components/ModulePage";

const moduleData = getModuleBySlug("finance")!;

export default function FinancePage() {
  return <ModulePage module={moduleData} />;
}
