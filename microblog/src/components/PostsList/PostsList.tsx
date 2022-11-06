import { usePosts } from "../../hooks/usePosts";
import { Post } from "../Post/Post";

export const PostsList = () => {
  const { data, isLoading, isError } = usePosts();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong...</div>;

  const postsList = data?.map((post) => <Post {...post} />);

  return (
    <div>
      {postsList}
      Ilość postów: {data?.length}
      {/* przenies (ilość postów gdzie indziej) */}
    </div>
  );
};
