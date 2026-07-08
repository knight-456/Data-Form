import { pagesInfo } from "@/utils/pages-info.utils";
import {
  Palette,
  Building2,
  ShieldCheck,
  Users2,
  CreditCard,
  Terminal,
  Bell,
  Plug,
  FileCheck,
  Lock,
  Globe,
} from "lucide-react";

export const settingsOptions = [
  {
    title: "Company Settings",
    description:
      "Manage your organization's profile, branding, and contact details.",
    href: pagesInfo.settings.child.company.path,
    icon: Building2,
  },
  {
    title: "Security & Access",
    description: "Configure 2FA, SSO, and view audit logs.",
    href: pagesInfo.settings.child.security.path,
    icon: ShieldCheck,
  },
  {
    title: "Organization",
    description: "Manage teams, designations, business hours, and locations.",
    href: pagesInfo.settings.child.organization.path,
    icon: Users2,
  },
  {
    title: "Billing & Plans",
    description: "View invoices, manage payment methods, and monitor usage.",
    href: pagesInfo.settings.child.billing.path,
    icon: CreditCard,
  },
  {
    title: "Developers",
    description: "Manage API keys, webhooks, and data exports.",
    href: pagesInfo.settings.child.developers.path,
    icon: Terminal,
  },
  {
    title: "Notifications",
    description: "Configure alert preferences and email templates.",
    href: pagesInfo.settings.child.notifications.path,
    icon: Bell,
  },
  {
    title: "Integrations",
    description: "Manage connections with third-party tools.",
    href: pagesInfo.settings.child.integrations.path,
    icon: Plug,
  },
  {
    title: "Compliance & Data",
    description: "Manage legal and data retention policies.",
    href: pagesInfo.settings.child.compliance.path,
    icon: FileCheck,
  },
  {
    title: "Roles & Permissions",
    description: "Granular control over what users can do.",
    href: pagesInfo.settings.child.roles.path,
    icon: Lock,
  },
  {
    title: "Region & Preferences",
    description: "Localization settings for the organization.",
    href: pagesInfo.settings.child.region.path,
    icon: Globe,
  },
  {
    title: "Theme Settings",
    description: "Customize the look and feel of your application.",
    href: pagesInfo.settings.child.theme.path,
    icon: Palette,
  },
];
