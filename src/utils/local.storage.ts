import { clearAllCookies } from "./local.cookies";
import { pagesInfo } from "./pages-info.utils";
import { localsConst } from "./utils.data";
import { getBaseDomain } from "./subdomain.utils";

type LocalStorageKey = string;

type User = {
  id: number;
  name: string;
  role: string;
  email: string;
  username: string;
};

export const LocalStorageUtil = {
  // Set an item in localStorage
  setItem<T>(key: LocalStorageKey, value: T): void {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (error) {
      console.log(`Error setting item in localStorage: ${error}`);
    }
  },

  // Get an item from localStorage
  getItem<T>(key: LocalStorageKey): T | null {
    try {
      const jsonValue = localStorage.getItem(key);
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log(`Error parsing item from localStorage: ${error}`);
      return null;
    }
  },

  // Remove an item from localStorage
  removeItem(key: LocalStorageKey): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(`Error removing item from localStorage: ${error}`);
    }
  },

  // Clear all items from localStorage
  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.log(`Error clearing localStorage: ${error}`);
    }
  },
};

export const getLoggedInUser = () => {
  const storedUser = localStorage.getItem(localsConst.leads_force_user.key);

  const user: User | null = !!storedUser ? JSON.parse(storedUser) : null;
  return user;
};

export const handleLogoutSession = async () => {
  // LocalStorageUtil.clear();
  clearAllCookies();

  // Redirect to base domain login page
  const baseDomain = getBaseDomain()?.replace(/^\./, ""); // Remove leading dot

  if (baseDomain) {
    // Redirect to base domain (without subdomain)
    const protocol = window.location.protocol;
    const port = window.location.port;
    let baseUrl = `${protocol}//${baseDomain}`;
    if (port && port !== "80" && port !== "443") {
      baseUrl += `:${port}`;
    }
    window.location.href = `${baseUrl}${pagesInfo.login.path}`;
  } else {
    // Fallback for localhost
    window.location.href = pagesInfo.login.path;
  }
};
