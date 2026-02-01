"use strict";
import React from "react";
import { AlertPreferencesCard } from "@/components/settings/notifications/alert-preferences-card";
import { EmailTemplatesCard } from "@/components/settings/notifications/email-templates-card";
import { SettingsHeader } from "@/components/settings/settings-header";

const NotificationSettingsPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Notifications"
        description="Configure alert preferences and email templates."
      />
      <div className="grid gap-6">
        <AlertPreferencesCard />
        <EmailTemplatesCard />
      </div>
    </div>
  );
};

export default NotificationSettingsPage;
