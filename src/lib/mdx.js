import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "src/content/posts");

export async function getAllPosts() {
  const files = fs.readdirSync(POSTS_PATH);

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "").toLowerCase();
    const filePath = path.join(POSTS_PATH, fileName);
    const source = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter } = matter(source);

    return {
      slug,
      frontmatter,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  );
}

export async function getPostBySlug(slug) {
  const postFilePath = path.join(POSTS_PATH, `${slug.toLowerCase()}.md`);
  const source = fs.readFileSync(postFilePath, "utf8");
  const { content, data: frontmatter } = matter(source);

  return {
    frontmatter,
    code: content,
  };
}
