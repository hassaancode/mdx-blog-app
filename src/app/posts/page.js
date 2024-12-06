import Search from "@/components/Search";
import { Rss } from "lucide-react";
import client from "../../../tina/__generated__/client";
import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";

const POSTS_PER_PAGE = 5;

const BlogsPage = async ({ searchParams }) => {
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges.map(
    (edge) => edge.node
  );

  // Get current page from search params or default to 1
  const searchParam = await searchParams;
  const currentPage = Number(searchParam.page) || 1;
  const searchQuery = searchParam.search || "";
  const searchQueryLower = searchQuery.toLowerCase();

  // Filter posts based on search query
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
    <section id="blogs" className="flex flex-col max-w-[1024px] mx-auto mt-10 px-4">
      <div className="flex items-center justify-between gap-10 border-b mb-4 pb-2">
        <div className="flex gap-2 items-center tracking-wider text-slate-800">
          <Rss size={24} />
          <h1 className="text-2xl font-bold">Blogs</h1>
        </div>
        <Search />
      </div>
      {filteredPosts.length === 0 && (
        <div className="flex flex-col items-center text-zinc-700">
          <span>No Result Found</span>
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
  );
};

export default BlogsPage;


export async function generateMetadata() {
  return {
    title: "Hassaan Ali - Blogs",
    description: "Blogs page for Hassaan Ali",
  };
}