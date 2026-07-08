export function isTokenExpired(token: string): boolean {
  const decodedToken = decodeJWT(token);
  const currentTime = Math.floor(Date.now() / 1000);
  return decodedToken?.exp < currentTime;
}

export function decodeJWT(token: string): any {
  try {
    const base64Url = token?.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
  } catch (e: any) {
    console.log(`error: ${e}`);
    return null;
  }
}
