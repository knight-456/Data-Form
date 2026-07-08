"use strict";
import React from "react";
import { SecurityPoliciesCard } from "@/components/settings/security/security-policies-card";
import { SSOConfigCard } from "@/components/settings/security/sso-config-card";
import { AuditLogsCard } from "@/components/settings/security/audit-logs-card";
import { DomainsCard } from "@/components/settings/security/domains-card";
import { SettingsHeader } from "@/components/settings/settings-header";

const SecuritySettingsPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Security & Access"
        description="Configure 2FA, SSO, and view audit logs."
      />
      <div className="grid gap-6">
        <SecurityPoliciesCard />
        <SSOConfigCard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DomainsCard />
          <AuditLogsCard />
        </div>
      </div>
    </div>
  );
};

export default SecuritySettingsPage;
