"use strict";
import React from "react";
import { DepartmentsCard } from "@/components/settings/organization/departments-card";
import { DesignationsCard } from "@/components/settings/organization/designations-card";
import { BusinessHoursCard } from "@/components/settings/organization/business-hours-card";
import { LocationsCard } from "@/components/settings/organization/locations-card";
import { SettingsHeader } from "@/components/settings/settings-header";

const OrganizationSettingsPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <SettingsHeader
        title="Organization"
        description="Manage departments, designations, business hours, and locations."
      />
      <div className="grid gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DepartmentsCard />
          <DesignationsCard />
        </div>
        <BusinessHoursCard />
        <LocationsCard />
      </div>
    </div>
  );
};

export default OrganizationSettingsPage;
