import { useQuery, useMutation } from "@tanstack/react-query";
import { addPost, removePost } from "../api/postsApi";
import { queryClient } from "../App";

export interface ArticleI {
  title: string;
  description: string;
  author: string;
  id: number;
}

const getArticles = async (url: string): Promise<ArticleI[]> => {
  const response = await fetch(url);
  const articles: Promise<ArticleI[]> = await response.json();
  return articles;
};

export const usePosts = () => {
  const { data, isLoading, isError } = useQuery(["articles"], () =>
    getArticles("http://localhost:8080/articles")
  );

  const addPostMutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
    },
  });

  const removePostMutation = useMutation(removePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["articles"]);
    },
  });

  return {
    data,
    isLoading,
    isError,
    addPostMutation,
    removePostMutation,
  };
};
