import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Command PRO — One Ecosystem. Every Tool You Need.",
  description: "Replace QuickBooks, Monday.com, and Salesforce with one connected platform. Command Projects, Command Finance, Command CRM, and Command Design — all under one roof.",
  keywords: "project management, accounting software, CRM, design management, business tools, SaaS",
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
