import { BrandingCard } from "@/components/settings/company/branding-card";
import { ContactCard } from "@/components/settings/company/contact-card";
import { GeneralCard } from "@/components/settings/company/general-card";
import { SettingsHeader } from "@/components/settings/settings-header";

export default function CompanySettingsPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Company Settings"
        description="Manage your organization's profile and preferences."
      />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <GeneralCard />
          <ContactCard />
        </div>
        <div className="space-y-6">
          <BrandingCard />
        </div>
      </div>
    </div>
  );
}
