

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function PostCard({ post }) {
  return (
    <Card className="mb-6 hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex gap-6">
        <div>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.frontmatter.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.frontmatter.readTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.frontmatter.author}</span>
            </div>
          </div>
          <Link href={`/posts/${post.slug}`}>
            <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
              {post.frontmatter.title}
            </h2>
          </Link>
          <p className="text-gray-600 mb-4">{post.frontmatter.excerpt}</p>
          <Link
            href={`/posts/${post.slug}`}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            Read More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {post.frontmatter.thumbnail && (
          <Image
            className="rounded-lg object-cover"
            src={post.frontmatter.thumbnail}
            width={150}
            height={150}
            alt={post.frontmatter.title}
          />
        )}
      </CardContent>
    </Card>
  );
}
