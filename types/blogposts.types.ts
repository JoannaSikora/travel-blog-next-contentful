import { Asset, Entry } from 'contentful';

export interface BlogPost {
  title: string;
  slug: string;
  thumbnail: Asset;
  shortDescription: string;
  description: any;
}

export type BlogPostsList = Entry<BlogPost>[];
