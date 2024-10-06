import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { BlogPost } from "@/types";

const getAllBlogsPosts = async (): Promise<AxiosResponse<BlogPost[]>> => {
  const response: AxiosResponse<BlogPost[]> = await axios.get("/");
  return response;
};

export const useGetAllBlogPosts = () => {
  return useQuery<AxiosResponse<BlogPost[]>, Error>({
    queryKey: ["blogPosts"],
    queryFn: getAllBlogsPosts,
  });
};
