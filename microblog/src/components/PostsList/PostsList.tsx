import { usePosts } from "../../hooks/usePosts";

export const PostsList = () => {
  const { data, isLoading, isError, removePostMutation } = usePosts();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Something went wrong...</div>;

  const postsList = data?.map(({ title, description, author, id }) => (
    <div className="post" key={id}>
      <h3>{title}</h3>
      <span>{author}</span>
      <p>{description}</p>
      <button onClick={() => removePostMutation.mutate(id)}>Remove post</button>
    </div>
  ));

  return (
    <div>
      {postsList}
      Ilość postów: {data?.length}
      {/* przenies (ilość postów gdzie indziej) */}
    </div>
  );
};
