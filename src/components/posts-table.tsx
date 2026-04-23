"use client";

import { useState } from "react";
import {
  useGetPostsQuery,
  useDeletePostMutation,
  type Post,
} from "@/lib/redux/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PostDialog } from "@/components/post-dialog";

export function PostsTable() {
  const { data = [], isLoading } = useGetPostsQuery();
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();
  const [editing, setEditing] = useState<Post | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  function handleCreate() {
    setEditing(null);
    setDialogOpen(true);
  }

  function handleEdit(post: Post) {
    setEditing(post);
    setDialogOpen(true);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Posts</h2>
        <Button size="sm" onClick={handleCreate}>
          + New Post
        </Button>
      </div>

      {isLoading ? (
        <p className="text-sm text-muted-foreground">Loading...</p>
      ) : (
        <div className="rounded-lg border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Body</TableHead>
                <TableHead className="w-32 text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="text-muted-foreground text-xs">
                    {post.id}
                  </TableCell>
                  <TableCell className="font-medium max-w-[180px] truncate">
                    {post.title}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-sm text-muted-foreground max-w-xs truncate">
                    {post.body}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(post)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      disabled={isDeleting}
                      onClick={() => deletePost(post.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <PostDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        post={editing}
      />
    </div>
  );
}
