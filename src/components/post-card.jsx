import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight, FileImage } from "lucide-react";
import Image from "next/image";

// Function to truncate text
function truncateText(text, length) {
  const words = text.split(" ");
  return words.length > length
    ? `${words.slice(0, length).join(" ")}...`
    : text;
}

export default function PostCard({ post }) {
  return (
    <Link className="group" href={`/posts/${post.slug}`}>
      <Card className="mb-6 hover:shadow-lg transition-shadow">
        <CardContent className="p-6 flex flex-col  ">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.frontmatter.date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.frontmatter.readTime} min read</span>
            </div>
            <div className="sm:flex items-center gap-1 hidden">
              <User className="w-4 h-4" />
              <span>{post.frontmatter.author}</span>
            </div>
          </div>
          <div className="flex justify-between items-center space-x-4">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-slate-800 hover:text-blue-600 transition-colors">
                {truncateText(post.frontmatter.title, 8)}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {truncateText(post.frontmatter.excerpt, 20)}
              </p>
              <p className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
              </p>
            </div>
            <div>
              {post.frontmatter.thumbnail ? (
                <Image
                  className="rounded-lg object-cover group-hover:scale-105 transition-transform max-w-[120px] sm:max-w-[150px] min-w-[100px] aspect-square "
                  src={post.frontmatter.thumbnail}
                  width={150}
                  height={150}
                  alt={post.frontmatter.title}
                />
              ) : (
                <FileImage size={50} />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
