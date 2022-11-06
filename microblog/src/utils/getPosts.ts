import { ArticleI } from "../types";

export const getPosts = async (url: string): Promise<ArticleI[]> => {
  const response = await fetch(url);
  const articles: Promise<ArticleI[]> = await response.json();
  return articles;
};
