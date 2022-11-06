import React, { useState } from "react";
import { ArticleI, usePosts } from "../../hooks/usePosts";

export function Post({ title, description, author, id }: ArticleI) {
  const { removePostMutation } = usePosts();

  const [isPostVotedByUser, setIsPostVotedByUser] = useState(false);

  const handlePostVotingState = () => {
    setIsPostVotedByUser((prevIsPostVotedByUser) => !prevIsPostVotedByUser);
  };

  return (
    <div className="post" key={id}>
      <div>
        <h3>{title}</h3>
        <span>{author}</span>
        <p>{description}</p>
        <button onClick={() => removePostMutation.mutate(id)}>
          Remove post
        </button>
      </div>
      <button onClick={handlePostVotingState}>
        {isPostVotedByUser ? "Unvote" : "Vote"}
      </button>
    </div>
  );
}
