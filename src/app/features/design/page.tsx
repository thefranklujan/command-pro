"use client";
import { getModuleBySlug } from "@/data/modules";
import ModulePage from "@/components/ModulePage";

const moduleData = getModuleBySlug("design")!;

export default function DesignPage() {
  return <ModulePage module={moduleData} />;
}
