import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { BlogPost } from "@/types";

const getBlogPosts = async (
  blogPostId: string,
): Promise<AxiosResponse<BlogPost>> => {
  const response: AxiosResponse<BlogPost> = await axios.get(`/${blogPostId}`);

  return response;
};

export const useGetBlogPost = (blogPostId: string) => {
  return useQuery({
    queryKey: ["blogPost", blogPostId],
    queryFn: () => getBlogPosts(blogPostId),
  });
};
