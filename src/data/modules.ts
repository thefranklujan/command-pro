import {
  FolderKanban,
  Calculator,
  Users,
  Palette,
  MessageSquare,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

export interface ModuleFeature {
  name: string;
  description: string;
  icon: string; // emoji for detail pages
}

export interface ModuleData {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  heroDescription: string;
  icon: LucideIcon;
  color: string;
  lightColor: string;
  iconColor: string;
  gradient: string;
  gradientBg: string;
  features: ModuleFeature[];
  appsReplaced: string[];
  stats: { label: string; value: string }[];
}

export const modules: ModuleData[] = [
  {
    slug: "projects",
    name: "Command Projects",
    shortName: "Projects",
    tagline: "Project management, built for the field.",
    description:
      "Track every project from lead to completion. Tasks, daily logs, scheduling, and field documentation in one place.",
    heroDescription:
      "Stop juggling spreadsheets, texts, and sticky notes. Command Projects gives you full visibility into every job — from the first site visit to the final punch list. Assign tasks, log daily progress with photos, track crews in real time, and keep every stakeholder in the loop.",
    icon: FolderKanban,
    color: "from-primary to-primary-dark",
    lightColor: "bg-primary/5 border-primary/10",
    iconColor: "text-primary",
    gradient: "from-primary via-primary-light to-secondary",
    gradientBg: "from-primary/10 via-primary/5 to-transparent",
    features: [
      {
        name: "Project Tracking & Scheduling",
        description:
          "Kanban boards and calendar views to manage every project phase. Set milestones, track progress, and never miss a deadline.",
        icon: "📋",
      },
      {
        name: "Task Management & Assignments",
        description:
          "Create, assign, and prioritize tasks across your team. Set due dates, add dependencies, and track completion in real time.",
        icon: "✅",
      },
      {
        name: "Daily Logs with Photos",
        description:
          "Document every day on the job with timestamped photo logs. Track weather, hours, materials used, and work completed.",
        icon: "📸",
      },
      {
        name: "Team & Vendor Management",
        description:
          "Manage your crews, subcontractors, and vendors in one place. Track certifications, availability, and performance.",
        icon: "👥",
      },
      {
        name: "Scope of Work & Change Orders",
        description:
          "Create detailed scopes, manage change orders with approval workflows, and keep every revision documented.",
        icon: "📝",
      },
      {
        name: "Map View & Field Tracking",
        description:
          "See all your active projects on a map. Track field team locations, optimize routes, and manage territory coverage.",
        icon: "🗺️",
      },
    ],
    appsReplaced: ["Buildertrend", "CoConstruct", "Monday.com"],
    stats: [
      { label: "Tasks Managed", value: "Unlimited" },
      { label: "Active Projects", value: "Unlimited" },
      { label: "Daily Log Photos", value: "Unlimited" },
      { label: "Team Members", value: "Per Seat" },
    ],
  },
  {
    slug: "finance",
    name: "Command Finance",
    shortName: "Finance",
    tagline: "Replace QuickBooks. Save $170+/mo.",
    description:
      "Professional invoicing, expense tracking, purchase orders, change orders, and financial reports — all connected to your projects.",
    heroDescription:
      "Your books, your invoices, your margins — all in one place, connected to every project. Command Finance replaces QuickBooks, spreadsheets, and disconnected accounting tools with a purpose-built financial engine for remodelers.",
    icon: Calculator,
    color: "from-cta to-cta-dark",
    lightColor: "bg-cta/5 border-cta/10",
    iconColor: "text-cta",
    gradient: "from-cta via-cta-light to-cta",
    gradientBg: "from-cta/10 via-cta/5 to-transparent",
    features: [
      {
        name: "Invoicing & Payment Tracking",
        description:
          "Create professional invoices in seconds. Track payments, send reminders, and manage aging receivables automatically.",
        icon: "💰",
      },
      {
        name: "Expense Tracking by Project",
        description:
          "Log expenses against specific projects. Snap receipt photos, categorize costs, and see real-time budget vs. actual.",
        icon: "🧾",
      },
      {
        name: "Vendor Purchase Orders",
        description:
          "Create and manage purchase orders for materials and subcontractor work. Track fulfillment and costs per vendor.",
        icon: "📦",
      },
      {
        name: "Change Order Management",
        description:
          "Handle scope changes with built-in approval workflows. Auto-update project budgets and client invoices.",
        icon: "🔄",
      },
      {
        name: "Revenue & Margin Reports",
        description:
          "Real-time dashboards showing revenue, gross margins, net profit, and cash flow across all projects.",
        icon: "📊",
      },
      {
        name: "AR Aging & Profitability",
        description:
          "Track accounts receivable aging, identify slow-paying clients, and analyze profitability by project, client, or service type.",
        icon: "📈",
      },
    ],
    appsReplaced: ["QuickBooks", "FreshBooks", "Xero"],
    stats: [
      { label: "Saved Monthly", value: "$170+" },
      { label: "Invoice Speed", value: "30 sec" },
      { label: "Report Types", value: "12+" },
      { label: "Auto Reminders", value: "Yes" },
    ],
  },
  {
    slug: "crm",
    name: "Command CRM",
    shortName: "CRM",
    tagline: "Every client relationship, managed.",
    description:
      "Track leads through your sales pipeline, book appointments, and give clients their own branded portal with real-time project updates.",
    heroDescription:
      "From first contact to repeat client, Command CRM manages your entire relationship lifecycle. Track leads, automate follow-ups, book appointments, and give every client a branded portal where they can see project progress in real time.",
    icon: Users,
    color: "from-secondary to-secondary-dark",
    lightColor: "bg-secondary/5 border-secondary/10",
    iconColor: "text-secondary",
    gradient: "from-secondary via-secondary-light to-secondary",
    gradientBg: "from-secondary/10 via-secondary/5 to-transparent",
    features: [
      {
        name: "CRM & Deal Pipeline",
        description:
          "Visual pipeline to track every lead from first touch to signed contract. Drag-and-drop deals between stages.",
        icon: "🎯",
      },
      {
        name: "Appointment Booking & Calendar",
        description:
          "Let clients book consultations and site visits. Syncs with your calendar and sends automatic confirmations.",
        icon: "📅",
      },
      {
        name: "Branded Client Portals",
        description:
          "Give each client their own login to view project progress, approve selections, review invoices, and communicate with your team.",
        icon: "🏠",
      },
      {
        name: "Vendor Portal & Sub Access",
        description:
          "Provide subcontractors and vendors with limited portal access to view schedules, submit bids, and upload documents.",
        icon: "🤝",
      },
      {
        name: "Quality Checklists",
        description:
          "Create inspection checklists for each project phase. Track completion, document issues with photos, and ensure quality standards.",
        icon: "✔️",
      },
      {
        name: "Map View & Locations",
        description:
          "See all clients and prospects on a map. Plan sales routes, identify territory coverage, and manage service areas.",
        icon: "📍",
      },
    ],
    appsReplaced: ["HubSpot", "Salesforce", "Jobber"],
    stats: [
      { label: "Pipeline Stages", value: "Custom" },
      { label: "Client Portals", value: "Unlimited" },
      { label: "Lead Tracking", value: "Real-time" },
      { label: "Auto Follow-ups", value: "Yes" },
    ],
  },
  {
    slug: "design",
    name: "Command Design",
    shortName: "Design",
    tagline: "Design studio for remodelers.",
    description:
      "Mood boards, color palettes, material catalogs, fixture selections, and design packages — present like a pro.",
    heroDescription:
      "Impress clients with professional design presentations. Command Design gives you mood boards, curated material catalogs, color palettes, fixture tracking, and polished design packages — everything you need to sell the vision and close the deal.",
    icon: Palette,
    color: "from-pink-500 to-pink-600",
    lightColor: "bg-pink-50 border-pink-100",
    iconColor: "text-pink-500",
    gradient: "from-pink-400 via-pink-500 to-rose-500",
    gradientBg: "from-pink-500/10 via-pink-500/5 to-transparent",
    features: [
      {
        name: "Mood Boards & Inspiration",
        description:
          "Create stunning mood boards with drag-and-drop. Collect inspiration images, add notes, and share with clients for approval.",
        icon: "🎨",
      },
      {
        name: "Color Palettes & Swatches",
        description:
          "Build and save color palettes for each project. Match paint colors, coordinate finishes, and maintain design consistency.",
        icon: "🎭",
      },
      {
        name: "Materials & Finishes Catalog",
        description:
          "Maintain a searchable catalog of materials, finishes, and suppliers. Track pricing, lead times, and availability.",
        icon: "🪵",
      },
      {
        name: "Fixture & Selection Tracking",
        description:
          "Track every fixture selection — faucets, lighting, hardware. Link to suppliers, track orders, and manage delivery schedules.",
        icon: "💡",
      },
      {
        name: "Design Packages for Clients",
        description:
          "Assemble polished design packages combining mood boards, selections, and specifications into a client-ready presentation.",
        icon: "📐",
      },
      {
        name: "Photo Documentation",
        description:
          "Document before, during, and after photos organized by room and project phase. Build a portfolio automatically.",
        icon: "📷",
      },
    ],
    appsReplaced: ["Houzz Pro", "Pinterest Business", "Canva"],
    stats: [
      { label: "Mood Boards", value: "Unlimited" },
      { label: "Material Library", value: "Custom" },
      { label: "Client Sharing", value: "One Click" },
      { label: "Design Templates", value: "Included" },
    ],
  },
  {
    slug: "comms",
    name: "Command Comms",
    shortName: "Comms",
    tagline: "Your team, always connected.",
    description:
      "Project-based team chat, a real-time war room, company-wide social feed, AI assistant, and centralized file management.",
    heroDescription:
      "Stop losing messages in group texts and email chains. Command Comms gives your team project-based chat, a real-time war room for urgent coordination, a company social feed, an AI assistant, and centralized file management — all in one place.",
    icon: MessageSquare,
    color: "from-amber-500 to-amber-600",
    lightColor: "bg-amber-50 border-amber-100",
    iconColor: "text-amber-600",
    gradient: "from-amber-400 via-amber-500 to-orange-500",
    gradientBg: "from-amber-500/10 via-amber-500/5 to-transparent",
    features: [
      {
        name: "Team Chat by Project",
        description:
          "Organized chat channels for each project. Keep conversations focused, searchable, and tied to the work that matters.",
        icon: "💬",
      },
      {
        name: "War Room (Real-Time Command)",
        description:
          "A live command center for urgent situations. Coordinate crews, share updates, and make decisions in real time.",
        icon: "🎖️",
      },
      {
        name: "Company Social Feed",
        description:
          "A private social feed for your company. Share wins, celebrate milestones, post announcements, and build culture.",
        icon: "📢",
      },
      {
        name: "AI Assistant & Insights",
        description:
          "Built-in AI that answers questions about your projects, surfaces insights from your data, and helps draft communications.",
        icon: "🤖",
      },
      {
        name: "Centralized File Management",
        description:
          "One place for all project files — contracts, plans, photos, permits. Organized by project with version tracking.",
        icon: "📁",
      },
      {
        name: "Personal Task List",
        description:
          "Each team member gets their own task list pulling from all assigned projects. Never miss a deadline or assignment.",
        icon: "📋",
      },
    ],
    appsReplaced: ["Slack", "Microsoft Teams", "WhatsApp Business"],
    stats: [
      { label: "Message History", value: "Unlimited" },
      { label: "File Storage", value: "Unlimited" },
      { label: "AI Assistant", value: "Included" },
      { label: "Real-time Sync", value: "Instant" },
    ],
  },
  {
    slug: "playbook",
    name: "Command Playbook",
    shortName: "Playbook",
    tagline: "Your company brain, documented.",
    description:
      "Standard operating procedures, step-by-step instructions, company policies, directives, and a knowledge base — all role-based.",
    heroDescription:
      "Turn tribal knowledge into a scalable system. Command Playbook lets you document every process, policy, and procedure so your team can execute consistently — whether you have 3 employees or 300.",
    icon: BookOpen,
    color: "from-sky-500 to-sky-600",
    lightColor: "bg-sky-50 border-sky-100",
    iconColor: "text-sky-600",
    gradient: "from-sky-400 via-sky-500 to-blue-500",
    gradientBg: "from-sky-500/10 via-sky-500/5 to-transparent",
    features: [
      {
        name: "Processes & SOPs",
        description:
          "Document standard operating procedures with rich formatting, images, and videos. Assign to roles and track completion.",
        icon: "📖",
      },
      {
        name: "Step-by-Step Procedures",
        description:
          "Break complex processes into numbered steps with photos and checklists. Perfect for training new team members.",
        icon: "🔢",
      },
      {
        name: "Company Policies & Acknowledgment",
        description:
          "Publish company policies and require employee acknowledgment. Track who has read and accepted each policy.",
        icon: "📜",
      },
      {
        name: "Company Directives",
        description:
          "Issue company-wide directives with priority levels, effective dates, and automated distribution to relevant teams.",
        icon: "📣",
      },
      {
        name: "Knowledge Base",
        description:
          "A searchable library of articles, guides, FAQs, and reference materials. Your team finds answers without asking you.",
        icon: "🧠",
      },
      {
        name: "Role-Based Access Control",
        description:
          "Control who sees what. Field crews see field procedures, office staff see admin processes, managers see everything.",
        icon: "🔐",
      },
    ],
    appsReplaced: ["Trainual", "Notion", "Google Docs"],
    stats: [
      { label: "SOPs", value: "Unlimited" },
      { label: "Policy Tracking", value: "Built-in" },
      { label: "Search", value: "Instant" },
      { label: "Role Access", value: "Granular" },
    ],
  },
];

export function getModuleBySlug(slug: string): ModuleData | undefined {
  return modules.find((m) => m.slug === slug);
}
