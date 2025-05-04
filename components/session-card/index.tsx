"use client";

import { betterAuthClient } from "@/lib/integrations/better-auth";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export const SessionCard = () => {
  const router = useRouter();

  const { data } = betterAuthClient.useSession();

  if (data) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{data.user.name}'s Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-row items-center gap-4">
            <Button
              variant="default"
              onClick={() => {
                router.push("/home");
              }}
            >
              View Posts
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
    );
  }

  return (
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
  );
};
