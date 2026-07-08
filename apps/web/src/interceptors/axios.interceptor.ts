import { baseCredApiInstance } from "@/apiInstance/base";

import { cookiesConst, accessTokenValidityInSeconds } from "@/utils/utils.data";

import { authUrlEnums } from "@/services/auth/auth.const";

import { setCookie, getCookie } from "@/utils/local.cookies";
import { handleLogoutSession } from "@/utils/local.storage";
const getUniversalCookieValue = async (key: string): Promise<string | undefined> => {
  if (typeof window !== "undefined") {
    return getCookie(key);
  } else {
    const { getCookieUniversal } = await import("@/utils/server.utils");
    return getCookieUniversal(key);
  }
};

export const getAccessToken = async () => {
  try {
    const response = await refreshToken();
    if (!!response?.access_token) {
      setCookie(
        cookiesConst.leads_force_access_token.key,
        response?.access_token,
        {
          maxAge: accessTokenValidityInSeconds,
        },
      );
      return true;
    } else {
      throw new Error(response?.data?.message || "Error getting access token");
    }
  } catch (error) {
    console.error(`error: ${error}`);
    return false;
  }
};

export const refreshToken = async () => {
  try {
    // const refresh_token = getCookie(cookiesConst.leads_force_refresh_token.key);
    const refresh_token = await getUniversalCookieValue(
      cookiesConst.leads_force_refresh_token.key,
    );
    // const refresh_token = getCookie(cookiesConst.refresh_token.key);

    if (!refresh_token) {
      throw new Error("No refresh token found");
    }

    const response = await baseCredApiInstance().post(
      `${authUrlEnums.REFRESH_TOKEN}`,
      {
        refresh_token: refresh_token,
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error while refreshing token:", error);
    throw error;
  }
};

let isRefreshing = false;
let subscribers: Array<(token: string) => void> = [];

const onTokenRefreshed = (token: string) => {
  subscribers.forEach((callback) => callback(token));
  subscribers = [];
};

const addSubscriber = (callback: (token: string) => void) => {
  subscribers.push(callback);
};

export const requestInterceptor = async (config: any) => {
  if (config._retry && config.headers.Authorization) {
    return config;
  }

  // const access_token = getCookie(cookiesConst.leads_force_access_token.key);
  const access_token = getCookie(cookiesConst.leads_force_access_token.key);

  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  } else {
    // const refresh_token = getCookie(cookiesConst.leads_force_refresh_token.key);
    const refresh_token = await getUniversalCookieValue(
      cookiesConst.leads_force_refresh_token.key,
    );
    // const refresh_token = getCookie(cookiesConst.refresh_token.key);
    if (refresh_token) {
      try {
        const { access_token: newAccessToken } = await refreshToken();
        if (typeof window !== "undefined") {
          setCookie(cookiesConst.leads_force_access_token.key, newAccessToken, {
            maxAge: accessTokenValidityInSeconds,
          });
        }
        config.headers.Authorization = `Bearer ${newAccessToken}`;
      } catch (err) {
        if (typeof window !== "undefined") {
          handleLogoutSession();
        }
        return Promise.reject(err);
      }
    } else {
      if (typeof window !== "undefined") {
        handleLogoutSession();
      }
      return Promise.reject(new Error("No refresh token available"));
    }
  }
  return config;
};

export const responseInterceptor = async (instance: any, error: any) => {
  const { response, config: originalRequest } = error;
  // const refresh_token = getCookie(cookiesConst.leads_force_refresh_token.key);
  const refresh_token = await getUniversalCookieValue(
    cookiesConst.leads_force_refresh_token.key,
  );
  // const refresh_token = getCookie(cookiesConst.refresh_token.key);

  if (response?.status === 401 && refresh_token && !originalRequest._retry) {
    if (isRefreshing) {
      return new Promise((resolve) => {
        addSubscriber((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          resolve(instance(originalRequest));
        });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const { access_token } = await refreshToken();

      if (!access_token) {
        throw new Error("Failed to refresh token");
      }

      if (typeof window !== "undefined") {
        setCookie(cookiesConst.leads_force_access_token.key, access_token, {
          maxAge: accessTokenValidityInSeconds,
        });
      }

      onTokenRefreshed(access_token);

      originalRequest.headers.Authorization = `Bearer ${access_token}`;
      isRefreshing = false;
      return instance(originalRequest);
    } catch (refreshError) {
      isRefreshing = false;
      if (typeof window !== "undefined") {
        handleLogoutSession();
      }
      return Promise.reject(refreshError);
    }
  }

  if (response?.status === 401 && !refresh_token) {
    if (typeof window !== "undefined") {
      handleLogoutSession();
    }
  }

  return Promise.reject({
    status: response?.status,
    data: response?.data,
  });
};

export const axiosAuthInterceptor = (instance: any) => {
  instance.interceptors.request.use(requestInterceptor, (error: any) =>
    Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response: any) => response,
    (error: any) => responseInterceptor(instance, error),
  );
};
