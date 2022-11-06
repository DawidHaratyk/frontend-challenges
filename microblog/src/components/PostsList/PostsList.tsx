import { usePosts } from "../../hooks/usePosts";
import { Post } from "../Post/Post";

export const PostsList = () => {
  const { posts, isLoading, isError } = usePosts();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong...</div>;

  const postsList = posts.map((post) => <Post {...post} key={post.id} />);

  return (
    <div>
      <h4 className="posts-number"> Number of posts: {posts.length}</h4>
      {postsList}
    </div>
  );
};
