import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// hooks
import { useGetBlogPost } from "@/hooks/useGetBlogPost";

// partials
import BlogPostBody from "./components/BlogPostBody";
import BlogPostHeader from "./components/BlogPostHeader";

// components
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const BlogPost = () => {
  const { id: blogPostId } = useParams();
  const [isArtificialLoading, setIsArtificialLoading] = useState(false);

  const {
    isPending,
    error,
    data: blogPost,
  } = useGetBlogPost(blogPostId as string);

  useEffect(() => {
    if (!isPending && !error) {
      setIsArtificialLoading(true);
      const timer = setTimeout(() => {
        setIsArtificialLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isPending, error]);

  if (isPending || isArtificialLoading) {
    return <Loading className="h-[90vh]" />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <BlogPostHeader data={blogPost?.data.data} />
      <BlogPostBody data={blogPost?.data.data} />
    </>
  );
};

export default BlogPost;
