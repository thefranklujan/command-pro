"use client";
import { getModuleBySlug } from "@/data/modules";
import ModulePage from "@/components/ModulePage";

const moduleData = getModuleBySlug("playbook")!;

export default function PlaybookPage() {
  return <ModulePage module={moduleData} />;
}
