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

  const {
    isPending,
    error,
    data: blogPost,
  } = useGetBlogPost(blogPostId as string);

  if (isPending) {
    return <Loading className="h-[90vh]" />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <BlogPostHeader data={blogPost?.data} />
      <BlogPostBody data={blogPost?.data} />
    </>
  );
};

export default BlogPost;
