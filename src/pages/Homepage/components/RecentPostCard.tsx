import { useNavigate } from "react-router-dom";
import { BlogPost } from "@/types";

// utils
import { formatDate } from "@/utils/formatDates";

// icons
import { ArrowUpRight } from "lucide-react";

// components
import Image from "@/components/Image";

interface RecentPostCardProps {
  post: BlogPost;
}

const RecentPostCard = ({ post }: RecentPostCardProps) => {
  // library hooks
  const navigate = useNavigate();

  // functions
  const navigateToBlogPost = () => {
    navigate(`/post/${post.id}`);
  };

  return (
    <article
      className="flex cursor-pointer flex-col gap-4"
      onClick={navigateToBlogPost}
    >
      <div className="h-52 w-full xsm:h-64 lg:h-72 xl:h-80">
        <Image
          src={post.image}
          alt="blog article image"
          className="rounded-2xl"
        />
      </div>

      <div className="flex justify-between">
        <h3 className="text-lg font-medium xsm:text-xl">{post.title}</h3>
        <ArrowUpRight
          className="transform cursor-pointer duration-300 ease-in-out hover:scale-125"
          onClick={navigateToBlogPost}
        />
      </div>

      <p className="text-justify text-base sm:text-lg">
        {post.description} ...
      </p>

      <div className="flex items-center gap-4">
        <div className="size-10">
          <Image
            src={
              "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1706042619/messenger_app_profile_images/egwbcg7fcgqbqv6anelj.jpg"
            }
            alt="post author"
            className="rounded-full"
          />
        </div>

        <span className="text-sm font-medium sm:text-base">
          Hamza Eshoul &bull; {formatDate(post.created_at)}
        </span>
      </div>
    </article>
  );
};

export default RecentPostCard;
