import { getAllPosts } from "@/lib/mdx";
import { Rss } from "lucide-react";
import PostCard from "@/components/post-card";
import Image from "next/image";
export default async function Home() {
  const posts = await getAllPosts();
  return (
    <div className="space-y-16 mt-10 max-w-[900px] m-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-10 ">
        <Image
          className="rounded-full border lg:-rotate-6 lg:hover:rotate-0 transition-transform"
          src="/profile.jpg"
          width={200}
          height={200}
          alt="profile-picture"
        />
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-4xl font-bold text-slate-800">Hasssan Ali</h2>
          <p className="text-slate-500">Designer / Developer</p>
        </div>
      </div>

      {/* BLOGS SECTION */}

      <section id="blogs" className="flex flex-col ">
        <div className="flex gap-2 items-center mb-4 tracking-wider text-slate-800 border-b pb-2">
          <Rss size={24} />
          <h1 className="text-2xl font-bold ">
            Blogs
          </h1>
        </div>

        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
