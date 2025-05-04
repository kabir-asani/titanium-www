import type { NextConfig } from "next";
import { serverUrl } from "./lib/extras/environment";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${serverUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
