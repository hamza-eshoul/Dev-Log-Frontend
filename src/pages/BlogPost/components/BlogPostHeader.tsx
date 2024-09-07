import { BlogPost } from "@/types";

// utils
import { formatDate } from "@/utils/formatDates";

// components
import Image from "@/components/Image";

interface BlogPostHeaderProps {
  data: BlogPost;
}

const BlogPostHeader = ({ data }: BlogPostHeaderProps) => {
  return (
    <section className="flex flex-col-reverse md:h-[75vh] md:flex-row md:gap-20">
      <div className="flex flex-col justify-center gap-5 px-4 pt-12 md:w-[48%] md:px-0 md:pt-0">
        <time className="text-sm font-semibold text-secondary sm:text-base">
          {formatDate(data.created_at)} &bull; {data.time_to_read} min read
        </time>
        <h1 className="text-3xl font-bold sm:text-5xl sm:leading-[60px]">
          {data.title}
        </h1>
        <h2 className="text-base text-secondary sm:text-lg">
          {data.description}
        </h2>
        <div className="flex items-center gap-3">
          <img
            src={
              "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1706042619/messenger_app_profile_images/egwbcg7fcgqbqv6anelj.jpg"
            }
            className="size-11 rounded-full object-cover"
          />
          <div className="flex flex-col text-sm">
            <span className="font-medium">{data.author}</span>
            <span className="text-secondary">{data.author_profession}</span>
          </div>
        </div>
      </div>

      <div className="md:w-[52%]">
        <Image alt="blog post image" src={data.image} />
      </div>
    </section>
  );
};

export default BlogPostHeader;
