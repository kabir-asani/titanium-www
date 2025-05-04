"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { betterAuthClient } from "@/lib/integrations/better-auth";
import { useRouter } from "next/navigation";

const RootPage = () => {
  const router = useRouter();

  const { data } = betterAuthClient.useSession();

  if (data) {
    return (
      <div className="h-svh w-full flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>{data.user.name}&apos;s Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row items-center gap-4">
              <Button
                variant="default"
                onClick={() => {
                  router.push("/home-server");
                }}
              >
                View Home (Server)
              </Button>
              <Button
                variant="default"
                onClick={() => {
                  router.push("/home-client");
                }}
              >
                View Home (Client)
              </Button>
              <Button
                variant="default"
                onClick={() => {
                  betterAuthClient.signOut();
                }}
              >
                Log Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="h-svh w-full flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Log In / Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center gap-4">
            <Button
              variant="default"
              onClick={() => {
                betterAuthClient.signIn.email({
                  email: "kabir@gmail.com",
                  password: "Hello@1234",
                });
              }}
            >
              Log In
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                betterAuthClient.signUp.email({
                  name: "Kabir",
                  email: "kabir@gmail.com",
                  password: "Hello@1234",
                });
              }}
            >
              Sign Up
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RootPage;
