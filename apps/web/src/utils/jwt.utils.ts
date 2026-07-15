type JwtPayload = {
  exp?: number;
  [key: string]: unknown;
};

export function isTokenExpired(token: string): boolean {
  const decodedToken = decodeJWT(token);
  const currentTime = Math.floor(Date.now() / 1000);
  return typeof decodedToken?.exp !== "number" || decodedToken.exp < currentTime;
}

export function decodeJWT(token: string): JwtPayload | null {
  try {
    const base64Url = token?.split('.')[1];
    if (!base64Url) return null;

    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodeBase64 =
      typeof window !== "undefined"
        ? window.atob
        : (value: string) => Buffer.from(value, "base64").toString("binary");

    const jsonPayload = decodeURIComponent(
      decodeBase64(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}
