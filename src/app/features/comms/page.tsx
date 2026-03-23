import type { Metadata } from "next";
import { getModuleBySlug } from "@/data/modules";
import ModulePage from "@/components/ModulePage";

export const dynamic = "force-dynamic";

const moduleData = getModuleBySlug("comms")!;

export const metadata: Metadata = {
  title: `${moduleData.name} | Command PRO`,
  description: moduleData.heroDescription,
};

export default function CommsPage() {
  return <ModulePage module={moduleData} />;
}
