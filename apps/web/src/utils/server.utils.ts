"use server";

import { cookies } from "next/headers";

export const getCookieUniversal = async (key: string): Promise<string | undefined> => {
  const serverCookies = await cookies();
  return serverCookies.get(key)?.value;
};
