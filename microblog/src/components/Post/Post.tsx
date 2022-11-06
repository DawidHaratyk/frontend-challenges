import { useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import { ArticleI } from "../../types";

export function Post({ title, description, author, id }: ArticleI) {
  const { posts, removePostMutation, updatePostsIdMutation } = usePosts();

  const [isPostVotedByUser, setIsPostVotedByUser] = useState(false);

  const handlePostVotingState = () => {
    setIsPostVotedByUser((prevIsPostVotedByUser) => !prevIsPostVotedByUser);
  };

  const handleRemoveAndUpdatePosts = () => {
    updatePostsIdMutation.mutate(
      posts.map((post, key) => ({
        ...post,
        id: key,
      }))
    );
    removePostMutation.mutate(id);
  };

  return (
    <div className="post" key={id}>
      <div>
        <h3>{title}</h3>
        <span>{author}</span>
        <p>{description}</p>
        <button onClick={handleRemoveAndUpdatePosts}>Remove post</button>
      </div>
      <button onClick={handlePostVotingState}>
        {isPostVotedByUser ? "Unvote" : "Vote"}
      </button>
    </div>
  );
}
