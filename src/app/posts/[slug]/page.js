import MDXContent from "@/components/MDXContent";
import styles from "./styles.module.css";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import Image from "next/image";

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
    <article className={`prose lg:prose-xl mx-auto ${styles.article}`}>
      {frontmatter.thumbnail && (
        <Image
          src={frontmatter.thumbnail}
          alt={frontmatter.title}
          width={300}
          height={300}
        />
      )}
      <h1>{frontmatter.title}</h1>
      <div className="text-gray-500 mb-8">
        Posted on {new Date(frontmatter.date).toLocaleDateString()}
      </div>
      <MDXContent code={code} />
    </article>
  );
}
