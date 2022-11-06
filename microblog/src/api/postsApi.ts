import { ArticleI } from "../types";

export const addPost = (post: ArticleI) => {
  const response = fetch("http://localhost:8080/posts", {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(post),
  });
  return response;
};

export const removePost = (id: number) => {
  const response = fetch(`http://localhost:8080/posts/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return response;
};

export const updatePostsId = (posts: ArticleI[]) => {
  const response = fetch("http://localhost:8080/posts", {
    method: "PATCH",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(posts),
  });
  return response;
};
