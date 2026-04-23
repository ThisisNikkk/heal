"use client";

import { useGetPostsQuery } from "@/lib/redux/api";
import { Button } from "@/components/ui/button";

export function PostsList() {
  const { data, error, isLoading, isFetching, refetch } = useGetPostsQuery();

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Loading posts...</p>;
  }

  if (error) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-destructive">Failed to load posts.</p>
        <Button variant="outline" onClick={() => refetch()}>
          Try again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">RTK Query Posts</h2>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          {isFetching ? "Refreshing..." : "Refresh"}
        </Button>
      </div>
      <ul className="space-y-3">
        {data?.map((post) => (
          <li key={post.id} className="rounded-lg border bg-card p-4">
            <h3 className="font-medium">{post.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
