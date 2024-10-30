import { getAllPosts } from "@/lib/mdx";
import { Rss } from "lucide-react";
import PostCard from "@/components/post-card";
import Image from "next/image";
import Search from "@/components/Search";
import RouterButton from "@/components/RouterButton";
export default async function Home({ searchParams }) {
  const posts = await getAllPosts();
  const searchParam = await searchParams;
  const searchQuery = searchParam.search || "";

  // FUNCTION TO Filter posts based on search query
  const searchQueryLower = searchQuery.toLowerCase();
  const filteredPosts = posts.filter(
    (post) =>
      post.frontmatter.title.toLowerCase().includes(searchQueryLower) ||
      post.frontmatter.author.toLowerCase().includes(searchQueryLower)
  );

  return (
    //PROFILE SECTION
    <div className="space-y-16 mt-10 max-w-[900px] m-auto px-4">
      <div className="flex lg:flex-row items-center gap-5 md:gap-10 ">
        <Image
          className="rounded-full border lg:-rotate-6 lg:hover:rotate-0 transition-transform w-[100px] md:w-[200px] "
          src="/profile.jpg"
          width={700}
          height={700}
          alt="profile-picture"
        />
        <div className="flex flex-col lg:items-start">
          <h2 className="text-[7vw] sm:text-4xl font-bold text-slate-800">
            Hasssan Ali
          </h2>
          <p className="text-slate-500 text-sm md:text-base">
            Designer / Developer
          </p>
        </div>
      </div>

      {/* BLOGS SECTION */}
      <section id="blogs" className="flex flex-col ">
        <div className="flex items-center justify-between gap-4 border-b mb-4 pb-2">
          <div className="flex gap-2 items-center tracking-wider text-slate-800 ">
            <Rss size={24} />
            <h1 className="text-2xl font-bold ">Blogs</h1>
          </div>
          <Search />
        </div>
        {filteredPosts.length === 0 && (
          <div className="flex flex-col items-center text-zinc-700">
            <span>No Result Found</span>
            <RouterButton>Go Home</RouterButton>
          </div>
        )}
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  );
}
