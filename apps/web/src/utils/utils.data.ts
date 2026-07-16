export const cookiesConst = {
  btl_refresh_token: {
    key: "btl_refresh_token",
  },
  btl_access_token: {
    key: "btl_access_token",
  },
  refresh_token: {
    key: "refresh_token",
  },
};

export const localsConst = {
  btl_role: {
    key: "btl_role",
  },
  btl_user: {
    key: "btl_user",
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
