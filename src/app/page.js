import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import Image from "next/image";
import PostCard from "@/components/post-card";
export default async function Home() {
  const posts = await getAllPosts();
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Blog Posts</h1>
      <div className="grid grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
