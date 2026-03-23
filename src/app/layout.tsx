import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Command PRO | Software for Remodelers",
  description: "Run your entire remodeling operation from one platform. Project management, invoicing, client portals, AI assistant, and 36 tools built for contractors. Replace 8 apps for $99/mo.",
  keywords: "remodeling software, contractor software, project management, invoicing, CRM, construction management, QuickBooks alternative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
