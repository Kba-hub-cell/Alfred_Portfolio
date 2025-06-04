export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
  github?: string;
  liveDemo?: string;
}