"use server";

import { getCookie } from "cookies-next/client";
import { cookies } from "next/headers";

export const getCookieUniversal = async (key: string): Promise<string | undefined> => {
  if (typeof window !== "undefined") {
    console.log("client side cookies", key, getCookie(key))
    return getCookie(key);
  } else {
    const serverCookies = await cookies();
    console.log("server cookies", serverCookies.get(key))
    return serverCookies.get(key)?.value;
  }
};
