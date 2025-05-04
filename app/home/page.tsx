import { SessionGuard } from "@/components/session-guard";
import { Card, CardContent } from "@/components/ui/card";
import { serverUrl } from "@/lib/extras/environment";
import { headers } from "next/headers";
import React from "react";
import { z } from "zod";

const top10PostsSchema = z
  .object({
    id: z.string(),
    text: z.string(),
  })
  .array();

const HomePage = async () => {
  const response = await fetch(`${serverUrl}/posts/latest-10`, {
    method: "GET",
  });

  const json = await response.json();
  const top10Posts = top10PostsSchema.parse(json);

  return (
    <SessionGuard>
      <div className="container mx-auto">
        {top10Posts.length === 0 ? (
          <div className="h-svh w-full flex items-center justify-center">
            <Card>
              <CardContent>Empty Posts!</CardContent>
            </Card>
          </div>
        ) : (
          <div className="flex flex-col items-stretch gap-4">
            {top10Posts.map((post) => {
              return (
                <Card key={post.id}>
                  <CardContent>{post.text}</CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </SessionGuard>
  );
};

export default HomePage;
