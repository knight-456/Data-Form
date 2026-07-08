"use strict";
import React from "react";
import { APIKeysCard } from "@/components/settings/developers/api-keys-card";
import { WebhooksCard } from "@/components/settings/developers/webhooks-card";
import { DataExportCard } from "@/components/settings/developers/data-export-card";
import { SettingsHeader } from "@/components/settings/settings-header";

const DeveloperSettingsPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Developers"
        description="Manage API keys, webhooks, and data exports."
      />
      <div className="grid gap-6">
        <APIKeysCard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <WebhooksCard />
          <DataExportCard />
        </div>
      </div>
    </div>
  );
};

export default DeveloperSettingsPage;
