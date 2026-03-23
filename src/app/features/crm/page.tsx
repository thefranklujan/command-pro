"use client";
import { getModuleBySlug } from "@/data/modules";
import ModulePage from "@/components/ModulePage";

const moduleData = getModuleBySlug("crm")!;

export default function CrmPage() {
  return <ModulePage module={moduleData} />;
}
