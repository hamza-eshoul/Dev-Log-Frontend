import { BlogPost, ContentItem } from "@/types";
import { ArrowDown } from "lucide-react";

interface BlogPostBodyProps {
  data: BlogPost;
}

interface BlogPostContentProps {
  data: ContentItem;
}

const BlogPostContent = ({ data }: BlogPostContentProps) => {
  switch (data.type) {
    case "paragraph":
      return <p className="mb-5 text-justify text-gray-600">{data.text}</p>;

    case "image":
      return (
        <div className="mb-5 w-full">
          <img
            src={data.src}
            alt={data.alt}
            className="min-h-[10rem] w-full transform rounded-lg transition duration-300 ease-in-out hover:scale-[1.02] sm:h-full sm:max-h-[30rem] sm:min-h-0 sm:object-cover"
          />
        </div>
      );

    case "citation":
      return (
        <div className="mb-5 flex flex-col gap-6 border-l-[1px] border-black pl-4">
          <p className="text-xl font-bold sm:text-2xl">{data.text}</p>
          <span className="text-gray-600">—{data.author}</span>
        </div>
      );

    case "list":
      return (
        <ul className="mb-5 list-disc pl-5 text-gray-600">
          {data.items?.map((item, index) => (
            <li key={index} className="mb-2">
              {item}
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
};

const BlogPostBody = ({ data }: BlogPostBodyProps) => {
  // functions
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="my-10 flex flex-col-reverse gap-10 px-3 md:my-20 md:flex-row md:gap-20 md:pl-0 md:pr-16">
      <div className="flex-1 flex-grow">
        {data.content?.data.map((section) => (
          <div id={section.title} className="mb-6">
            <h2 className="pb-4 text-xl font-semibold sm:text-2xl">
              {section.title}
            </h2>
            {section.content.map((content) => (
              <BlogPostContent data={content} />
            ))}
          </div>
        ))}
      </div>

      <aside className="flex-none md:w-[20%]">
        {" "}
        <ul className="flex cursor-pointer flex-col gap-3 font-bold">
          {data.content?.data.map((section) => (
            <div
              className="flex cursor-pointer justify-between border-b border-black py-2"
              onClick={() => scrollToSection(section.title)}
            >
              <li key={section.title}>{section.title}</li>
              <ArrowDown className="md:hidden" />
            </div>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default BlogPostBody;
