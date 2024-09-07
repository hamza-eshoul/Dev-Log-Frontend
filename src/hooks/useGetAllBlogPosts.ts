import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { BlogPost } from "@/types";

interface BlogPostsResponse {
  data: BlogPost[];
}

const getAllBlogsPosts = async (): Promise<
  AxiosResponse<BlogPostsResponse>
> => {
  const response: AxiosResponse<BlogPostsResponse> = await axios.get("/");
  return response;
};

export const useGetAllBlogPosts = () => {
  return useQuery<AxiosResponse<BlogPostsResponse>, Error>({
    queryKey: ["blogPosts"],
    queryFn: getAllBlogsPosts,
  });
};
