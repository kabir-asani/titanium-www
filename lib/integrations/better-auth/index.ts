import { createAuthClient } from "better-auth/react";
import { nextCookies } from "better-auth/next-js";
import { webClientUrl } from "@/lib/extras/environment";

export const betterAuthClient = createAuthClient({
  baseURL: webClientUrl,
  basePath: "/authentications",
  plugins: [nextCookies()],
});
