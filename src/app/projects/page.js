import RouterButton from "@/components/RouterButton";
import { client } from "../../../tina/__generated__/client";
import { Folder, Rss } from "lucide-react";
import PostCard from "@/components/PostCard";
import { metadata } from "../layout";

const ProjectsPage = async () => {
  const postsResponse = await client.queries.projectConnection();
  const projects = postsResponse.data.projectConnection.edges.map(
    (edge) => edge.node
  );
  return (
    <section
      id="projects"
      className="flex flex-col max-w-[1024px] mx-auto mt-10 px-4"
    >
      <div className="flex items-center justify-between gap-4 border-b mb-4 pb-2">
        <div className="flex gap-2 items-center tracking-wider text-slate-800 ">
          <Folder size={24} />
          <h1 className="text-2xl font-bold ">Projects</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((post) => (
          <PostCard key={post.id} post={post} projects />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

export async function generateMetadata() {
  return {
    title: "Hassaan Ali - Projects",
    description: "Projects page for Hassaan Ali",
  };
}
