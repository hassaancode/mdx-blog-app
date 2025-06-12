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

export default function PostCard({ post, projects }) {
  return (
    <>
      {!projects ? (
        <Link className="group" href={`/posts/${post._sys.filename}`}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0 sm:p-6 flex flex-col  ">
              <div className=" hidden sm:flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>
              {post.thumbnail ? (
                <Image
                  className="block sm:hidden object-cover group-hover:duration-300 duration-700 group-hover:scale-105 transition-transform w-full min-w-[100px] aspect-video"
                  src={post.thumbnail}
                  width={1000}
                  height={1000}
                  alt={post.title}
                />
              ) : (
                <FileImage size={50} />
              )}
              <div className="flex justify-between items-center space-x-4">
                <div className="p-4 sm:p-0">
                  <h2 className="text-md md:text-2xl font-bold mb-2 text-slate-800 hover:text-blue-600 transition-colors">
                    {truncateText(post.title, 8)}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    {truncateText(post.excerpt, 20)}
                  </p>
                  <p className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </p>
                </div>
                <div>
                  {post.thumbnail ? (
                    <Image
                      className="hidden sm:block rounded-lg object-cover group-hover:duration-300 duration-700 group-hover:scale-105 transition-transform max-w-[120px] sm:max-w-[150px] min-w-[100px] aspect-square "
                      src={post.thumbnail}
                      width={150}
                      height={150}
                      alt={post.title}
                    />
                  ) : (
                    <FileImage size={50} />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ) : (
        <ProjectCard post={post} />
      )}
    </>
  );
}

const ProjectCard = ({post}) => {
  return (
    <Link className="group" href={`/projects/${post._sys.filename}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
        <CardContent className="p-0 flex flex-col  ">
          <div className=" hidden items-center gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>
          {post.thumbnail ? (
            <Image
              className="block object-cover group-hover:duration-300 duration-700 group-hover:scale-105 transition-transform w-full min-w-[100px] aspect-video"
              src={post.thumbnail}
              width={1000}
              height={1000}
              alt={post.title}
            />
          ) : (
            <FileImage size={50} />
          )}
          <div className="flex justify-between items-center space-x-4">
            <div className="p-4">
              <h2 className="text-md md:text-xl font-bold mb-2 text-slate-800 hover:text-blue-600 transition-colors">
                {truncateText(post.title, 8)}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {truncateText(post.excerpt, 20)}
              </p>
              <p className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
