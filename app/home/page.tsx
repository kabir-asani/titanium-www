"use client";

import { Card, CardContent } from "@/components/ui/card";
import { serverUrl } from "@/lib/extras/environment";
import { useQuery } from "@tanstack/react-query";
import { LoaderIcon } from "lucide-react";
import React from "react";
import { z } from "zod";

const top10PostsSchema = z
  .object({
    id: z.string(),
    text: z.string(),
  })
  .array();

const HomePage = () => {
  const top10PostsQuery = useQuery({
    queryKey: ["posts", "latest-10"],
    queryFn: async () => {
      const response = await fetch(`${serverUrl}/posts/latest-10`, {
        method: "GET",
        credentials: "include",
      });

      const json = await response.json();
      const top10Posts = top10PostsSchema.parse(json);

      return top10Posts;
    },
  });

  if (top10PostsQuery.error) {
    return <div className="h-svh w-full flex items-center justify-center">Something Went Wrong!</div>;
  }

  if (top10PostsQuery.data) {
    const top10Posts = top10PostsQuery.data;

    return (
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
    );
  }

  return (
    <div className="h-svh w-full flex items-center justify-center">
      <LoaderIcon className="size-16" />
    </div>
  );
};

export default HomePage;
