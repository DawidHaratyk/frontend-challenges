import { useState } from "react";
import { usePosts } from "../../hooks/usePosts";

export function PostsForm() {
  const { data, addPostMutation } = usePosts();

  const [formInputs, setFormInputs] = useState({
    title: "",
    description: "",
    author: "",
  });

  const handleAddNewPost = () => {
    const { title, description, author } = formInputs;

    if (title && description && author && data?.length) {
      // fix problem when array of posts is empty (it's because we put data?.length in condition)

      addPostMutation.mutate({
        ...formInputs,
        id: data[data.length - 1].id + 1,
      });

      alert("Post was added");

      setFormInputs({
        title: "",
        description: "",
        author: "",
      });
    } else {
      alert("Fill all inputs, please");
    }
  };

  const handleFormStateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputType: string
  ) => {
    setFormInputs((prevFormInputs) => ({
      ...prevFormInputs,
      [inputType]: e.target.value,
    }));
  };

  return (
    <div className="form-container">
      <label htmlFor="post-title">
        Post title:
        <input
          type="text"
          placeholder="Post title..."
          className="form-input"
          value={formInputs.title}
          onChange={(e) => handleFormStateChange(e, "title")}
        />
      </label>
      <label htmlFor="post-description">
        Post description:
        <input
          type="text"
          placeholder="Post description..."
          className="form-input"
          value={formInputs.description}
          onChange={(e) => handleFormStateChange(e, "description")}
        />
      </label>
      <label htmlFor="post-author">
        Post author:
        <input
          type="text"
          placeholder="Post author..."
          className="form-input"
          value={formInputs.author}
          onChange={(e) => handleFormStateChange(e, "author")}
        />
      </label>
      <button onClick={handleAddNewPost} className="add-post-btn">
        Add a new post
      </button>
    </div>
  );
}
