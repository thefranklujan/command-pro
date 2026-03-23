"use client";
import { getModuleBySlug } from "@/data/modules";
import ModulePage from "@/components/ModulePage";

const moduleData = getModuleBySlug("projects")!;

export default function ProjectsPage() {
  return <ModulePage module={moduleData} />;
}
