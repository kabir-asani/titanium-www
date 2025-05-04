"use client";

import { tanstackQueryClient } from "@/lib/integrations/tanstack-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

export const TanstackProvider = (props: PropsWithChildren) => {
  return <QueryClientProvider client={tanstackQueryClient}>{props.children}</QueryClientProvider>;
};
