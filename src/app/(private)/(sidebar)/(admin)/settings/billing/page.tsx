"use strict";
import React from "react";
import { InvoicesCard } from "@/components/settings/billing/invoices-card";
import { PaymentMethodsCard } from "@/components/settings/billing/payment-methods-card";
import { UsageMetricsCard } from "@/components/settings/billing/usage-metrics-card";
import { SettingsHeader } from "@/components/settings/settings-header";

const BillingSettingsPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Billing & Plans"
        description="View invoices, manage payment methods, and monitor usage."
      />
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <UsageMetricsCard />
          <PaymentMethodsCard />
        </div>
        <InvoicesCard />
      </div>
    </div>
  );
};

export default BillingSettingsPage;
