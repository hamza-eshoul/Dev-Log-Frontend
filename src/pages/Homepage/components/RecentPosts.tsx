import { BlogPost } from "@/types";

// hooks
import { useGetAllBlogPosts } from "@/hooks/useGetAllBlogPosts";

// partials
import RecentPostCard from "./RecentPostCard";

// components
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const RecentPosts = () => {
  const { isPending, error, data: blogPosts } = useGetAllBlogPosts();

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="mb-20 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Recent blog posts</h2>

      {blogPosts.data.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.data.map((post: BlogPost) => (
            <RecentPostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>No blog posts available.</p>
      )}
    </section>
  );
};

export default RecentPosts;
