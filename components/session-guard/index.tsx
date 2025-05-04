"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { betterAuthClient } from "@/lib/integrations/better-auth";

export const SessionGuard = ({ children }: { children: React.ReactNode }) => {
  const { data } = betterAuthClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!data) {
      router.replace("/");
    }
  }, [data, router]);

  return <>{children}</>;
};
