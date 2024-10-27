import MDXContent from "@/components/MDXContent";
import styles from "./page.module.css";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import Image from "next/image";
import { useMemo } from "react";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const resolvedParams = await params;
  const { frontmatter, code } = await getPostBySlug(resolvedParams.slug);

  return (
    <article className="prose lg:prose-xl mx-auto">
      <Image
        src={frontmatter.thumbnail}
        alt={frontmatter.title}
        width={300}
        height={300}
      />
      <h1>{frontmatter.title}</h1>
      <div className="text-gray-500 mb-8">Posted on {frontmatter.date}</div>
      <MDXContent code={code} />
    </article>
  );
}
