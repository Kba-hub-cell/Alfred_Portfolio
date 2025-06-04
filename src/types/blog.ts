export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: number;
  tags: string[];
  coverImage?: string;
  author?: {
    name: string;
    avatar?: string;
  };
}