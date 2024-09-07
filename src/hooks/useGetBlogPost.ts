import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { BlogPost } from "@/types";

interface BlogPostResponse {
  data: BlogPost;
}

const getBlogPosts = async (
  blogPostId: string,
): Promise<AxiosResponse<BlogPostResponse>> => {
  const response: AxiosResponse<BlogPostResponse> = await axios.get(
    `/${blogPostId}`,
  );

  return response;
};

export const useGetBlogPost = (blogPostId: string) => {
  return useQuery({
    queryKey: ["blogPost", blogPostId],
    queryFn: () => getBlogPosts(blogPostId),
  });
};
