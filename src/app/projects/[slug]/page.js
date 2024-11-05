import styles from "./styles.module.css";
import TinaMarkdownComponent from "@/components/markdown/TinaMarkDown";
import Image from "next/image";
import client from "../../../../tina/__generated__/client";
import Link from "next/link";
import { CircleChevronLeft } from "lucide-react";

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const post = await client.queries.project({
    relativePath: `${resolvedParams.slug}.mdx`,
  });

  return (
    <>
      <div className="mt-5 max-w-[680px] mx-auto px-4 md:px-0">
        <Link
          className="group flex gap-2 text-slate-600 px-3 py-2 bg-slate-100 rounded-full w-fit "
          href="/"
        >
          <CircleChevronLeft className="group-hover:scale-110 transition-transform" />
          Back
        </Link>
        <article className={`${styles.article} mt-10`}>
          <header>
            <h1 className="text-5xl font-bold leading-[1.2]">
              {post.data.project.title}
            </h1>
            <p className="text-gray-500 mt-3">
              Posted on{" "}
              {new Date(post.data.project.date).toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="italic font-medium p-0">
              {" "}
              {post.data.project.excerpt}
            </p>
          </header>
          {post.data.project.thumbnail && (
            <div>
              <Image
                src={post.data.project.thumbnail}
                alt={post.data.project.title}
                width={1000}
                height={1000}
              />
            </div>
          )}

          {/* MARKDOWN */}
          <div id="content" className={`${styles.iframe}`}>
            <TinaMarkdownComponent content={post.data.project.body} />
          </div>
        </article>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const posts = await client.queries.projectConnection();
  return posts.data.projectConnection.edges.map((edge) => ({
    slug: edge.node._sys.filename,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = await client.queries.project({
    relativePath: `${resolvedParams.slug}.mdx`,
  });

  return {
    title: post.data.project.title,
    description: post.data.project.excerpt,
  };
}
