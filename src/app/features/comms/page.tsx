"use client";
import { getModuleBySlug } from "@/data/modules";
import ModulePage from "@/components/ModulePage";

const moduleData = getModuleBySlug("comms")!;

export default function CommsPage() {
  return <ModulePage module={moduleData} />;
}
