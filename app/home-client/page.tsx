"use client";

import { Card, CardContent } from "@/components/ui/card";
import { latest10PostsSchema } from "@/lib/schemas";
import { useQuery } from "@tanstack/react-query";
import { LoaderIcon } from "lucide-react";

const HomeClientPage = () => {
  const latest10PostsQuery = useQuery({
    queryKey: ["posts", "top-10"],
    queryFn: async () => {
      const response = await fetch(`/posts/latest-10`, {
        method: "GET",
        credentials: "include",
      });

      const json = await response.json();
      const latest10Posts = latest10PostsSchema.parse(json);

      return latest10Posts;
    },
  });

  if (latest10PostsQuery.error) {
    return <div className="h-svh w-full flex items-center justify-center">Something Went Wrong!</div>;
  }

  if (latest10PostsQuery.data) {
    const latest10Posts = latest10PostsQuery.data;

    return (
      <div className="container mx-auto">
        {latest10Posts.length === 0 ? (
          <div className="h-svh w-full flex items-center justify-center">
            <Card>
              <CardContent>Empty Posts!</CardContent>
            </Card>
          </div>
        ) : (
          <div className="flex flex-col items-stretch gap-4">
            {latest10Posts.map((post) => {
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

export default HomeClientPage;
