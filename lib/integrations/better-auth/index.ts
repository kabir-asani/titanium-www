import { createAuthClient } from "better-auth/react";
import { nextCookies } from "better-auth/next-js";
import { serverUrl } from "@/lib/extras/environment";

export const betterAuthClient = createAuthClient({
  baseURL: serverUrl,
  basePath: "/authentications",
  plugins: [nextCookies()],
});
