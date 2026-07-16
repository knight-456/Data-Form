import { setCookie, getCookie } from "cookies-next/client";
import { cookiesConst, thirtyDaysInSeconds } from "./utils.data";

type CookieOptions = {
  path?: string;
  maxAge?: number;
  secure?: boolean;
  sameSite?: "lax" | "strict" | "none";
  domain?: string;
};

type TCookiesProps = {
  name: string;
  value: string;
  options?: CookieOptions;
}[];

// Function to clear all cookies
function clearAllCookies() {
  // const baseDomain = getBaseDomain();
  const appCookies = Object.values(cookiesConst)?.map((cookieItem) => cookieItem?.key);
  appCookies?.forEach((cookieItem) => {
    if (cookieItem) {
      setCookie(cookieItem, "", { maxAge: -1, path: "/", domain: "" });
    }
  });
  // const cookies = document.cookie.split(";");
  // cookies.forEach((cookie) => {
  //   const cookieName = cookie.split("=")[0]?.trim();
  //   if (cookieName) {
  //     setCookie(cookieName, "", { maxAge: -1, path: "/" });
  //   }
  // });
}

const getAndSetCookie = () => {
  const refresh_token = getCookie(cookiesConst.btl_refresh_token.key);
  // const refresh_token = getCookie(cookiesConst.refresh_token.key);
  if (refresh_token) {
    setCookie(cookiesConst.btl_refresh_token.key, refresh_token, {
      maxAge: thirtyDaysInSeconds,
      path: "/",
      secure: true,
      sameSite: "none",
      domain: "",
    });
  } else {
    throw new Error("No refresh token found!");
  }
};

/**
 * Set multiple cookies with subdomain support
 * Automatically adds domain option for cross-subdomain cookie sharing
 */
export const setMultipleCookies = (
  cookies: TCookiesProps = [],
  _useSubdomainSharing: boolean = true
) => {
  // const baseDomain = useSubdomainSharing ? getBaseDomain() : undefined;
  const isLocalDev =
    typeof window !== "undefined" &&
    (window.location.hostname.endsWith(".local") || window.location.hostname === "localhost");

  cookies.forEach((cookieItem) => {
    const options = {
      ...cookieItem?.options,
      path: cookieItem?.options?.path || "/",
      // ...(baseDomain && { domain: baseDomain }),
      // For local HTTP development, explicitly set secure:false and sameSite:'lax'
      ...(isLocalDev && { secure: false, sameSite: "lax" as const }),
    };
    setCookie(cookieItem?.name, cookieItem?.value, options);
  });
};

export { clearAllCookies, getAndSetCookie, setCookie, getCookie };
