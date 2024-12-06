import { client } from "../../tina/__generated__/client";
import { Rss } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import PostCard from "@/components/PostCard";
import Image from "next/image";
import Search from "@/components/Search";
import {RouterButton} from "@/components/RouterButton";
import Link from "next/link";
import Pagination from "@/components/Pagination";

const POSTS_PER_PAGE = 5;

export default async function Home({ searchParams }) {
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges.map(
    (edge) => edge.node
  );

  // Get current page from search params or default to 1
  const searchParam = await searchParams;
  const currentPage = Number(searchParam.page) || 1;
  const searchQuery = searchParam.search || "";
  const searchQueryLower = searchQuery.toLowerCase();

  
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQueryLower) ||
      post.author.toLowerCase().includes(searchQueryLower)
  );

  // Calculate pagination values
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  
  // Get posts for current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    //PROFILE SECTION
    <div className="space-y-20 mt-10 max-w-[1024px] m-auto px-4">
      <div className="flex lg:flex-row items-center gap-5 md:gap-10 ">
        <Image
          className="rounded-full border lg:-rotate-6 lg:hover:rotate-0 transition-transform w-[35%] sm:w-[200px] "
          src="/profile.jpg"
          width={700}
          height={700}
          alt="profile-picture"
        />
        <div className="flex flex-col lg:items-start">
          <h2 className="text-[7vw] sm:text-4xl font-bold text-slate-800">Hassaan Ali</h2>
          <p className="text-slate-500 text-sm md:text-base">
            Designer / Developer
          </p>
          <div
            id="icons"
            className="flex text-slate-400 gap-1 mt-3 [&_a]:transition-colors"
          >
            <Link
              className="hover:text-gray-500"
              href="https://github.com/hassaancode"
              target="_blank"
              title="Github"
            >
              <IoLogoGithub size={24} />
            </Link>
            <Link
              className="hover:text-blue-500"
              href="https://www.linkedin.com/in/hassaanvfx/"
              target="_blank"
              title="Linkedin"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link
              className="hover:text-red-500"
              href="https://www.youtube.com/@hassaanvfx"
              target="_blank"
              title="Youtube"
            >
              <FaYoutube size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* BLOGS SECTION */}
      <section id="blogs" className="flex flex-col ">
        <div className="flex items-center justify-between gap-10 border-b mb-4 pb-2">
          <div className="flex gap-2 items-center tracking-wider text-slate-800 ">
            <Rss size={24} />
            <h1 className="text-2xl font-bold ">Blogs</h1>
          </div>
          <Search />
        </div>
        {filteredPosts.length === 0 && (
          <div className="flex flex-col items-center text-zinc-700">
            <span>No Result Found</span>
            <RouterButton btnText={"Reset"} />
          </div>
        )}
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {totalPosts > POSTS_PER_PAGE && (
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          searchQuery={searchQuery}
        />
      )}
      </section>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: "Hassaan Ali - Portfolio",
    description: "A portfolio built with Next.js 15 and MDX",
  };
}
