export interface BlogPost {
  id: number;
  time_to_read: number;
  title: string;
  description: string;
  author: string;
  author_profession: string;
  image: string;
  content: {
    data: {
      title: string;
      content: ContentItem[];
    }[];
  };
  created_at: Date;
}

export interface ContentItem {
  type: "paragraph" | "image" | "citation" | "list";
  text?: string;
  src?: string;
  alt?: string;
  author?: string;
  items?: string[];
}
