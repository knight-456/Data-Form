export const cookiesConst = {
  leads_force_refresh_token: {
    key: "leads_force_refresh_token",
  },
  leads_force_access_token: {
    key: "leads_force_access_token",
  },
  refresh_token: {
    key: "refresh_token",
  },
};

export const localsConst = {
  leads_force_role: {
    key: "leads_force_role",
  },
  leads_force_user: {
    key: "leads_force_user",
  },
  notification_permission_request: {
    key: "notification_permission_request",
  },
};

export const userRoleConst = {
  company: {
    label: "Company",
    key: "company",
    value: "Company",
  },
  admin: {
    label: "Admin",
    key: "admin",
    value: "Admin",
  },
  employee: {
    label: "Employee",
    key: "employee",
    value: "Employee",
  }
};

export const accessTokenValidityInSeconds = 40 * 60;
export const refreshTokenValidityInSeconds = 30 * 24 * 60 * 60;
export const thirtyDaysInSeconds = 30 * 24 * 60 * 60;
