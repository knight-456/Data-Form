// Token constants — consumed by both the interceptor and auth utilities
export const ACCESS_TOKEN_VALIDITY_SECONDS = 40 * 60; // 40 minutes
export const REFRESH_TOKEN_VALIDITY_SECONDS = 30 * 24 * 60 * 60; // 30 days

export const AUTH_COOKIE_KEYS = {
  ACCESS_TOKEN: "leads_force_access_token",
  REFRESH_TOKEN: "leads_force_refresh_token",
} as const;
