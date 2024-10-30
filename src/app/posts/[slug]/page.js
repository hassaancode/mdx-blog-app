import { metadata } from "@/app/layout";
import Nav from "@/components/header/Nav";
import MDXContent from "@/components/MDXContent";
import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import Image from "next/image";
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { frontmatter } = await getPostBySlug(resolvedParams.slug);
  return {
    title: frontmatter.title,
    description: frontmatter.excerpt,
  };
}

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
    <>
      <div className="mt-10 max-w-[800px] mx-auto">
        <Nav />
        <article className={`prose lg:prose-xl mx-auto px-4 md:px-0`}>
          {frontmatter.thumbnail && (
            <div>
              <Image
                className="rounded-xl w-full object-cover aspect-video"
                src={frontmatter.thumbnail}
                alt={frontmatter.title}
                width={1000}
                height={1000}
              />
            </div>
          )}
          <h1>{frontmatter.title}</h1>
          <div className="text-gray-500 ">
            Posted on {new Date(frontmatter.date).toLocaleDateString()}
          </div>
          <MDXContent code={code} />
        </article>
      </div>
    </>
  );
}
