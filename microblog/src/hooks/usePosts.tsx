import { useQuery, useMutation } from "@tanstack/react-query";
import { addPost, removePost, updatePostsId } from "../api/postsApi";
import { queryClient } from "../App";
import { getPosts } from "../utils/getPosts";

export const usePosts = () => {
  const { data, isLoading, isError } = useQuery(["posts"], () =>
    getPosts("http://localhost:8080/posts")
  );

  const posts = data ?? [];

  const addPostMutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const removePostMutation = useMutation(removePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const updatePostsIdMutation = useMutation(updatePostsId, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  return {
    posts,
    isLoading,
    isError,
    addPostMutation,
    removePostMutation,
    updatePostsIdMutation,
  };
};
