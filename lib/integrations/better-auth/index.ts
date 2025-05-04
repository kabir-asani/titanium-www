import { createAuthClient } from "better-auth/react";
import { nextCookies } from "better-auth/next-js";

export const betterAuthClient = createAuthClient({
  plugins: [nextCookies()],
});
