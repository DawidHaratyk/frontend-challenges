import { ArticleI } from "../hooks/usePosts";

export const addPost = (post: ArticleI) => {
  const response = fetch("http://localhost:8080/articles", {
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
  const response = fetch(`http://localhost:8080/articles/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  return response;
};
