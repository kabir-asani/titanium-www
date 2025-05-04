import { Card, CardContent } from "@/components/ui/card";
import { serverUrl } from "@/lib/extras/environment";
import { forwardableHeaders } from "@/lib/extras/headers";
import { latest10PostsSchema } from "@/lib/schemas";

const HomeServerPage = async () => {
  const response = await fetch(`${serverUrl}/posts/latest-10`, {
    method: "GET",
    headers: await forwardableHeaders(),
  });

  const json = await response.json();
  const latest10Posts = latest10PostsSchema.parse(json);

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
};

export default HomeServerPage;
