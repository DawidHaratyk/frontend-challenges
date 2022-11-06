import { useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import { FormInput } from "../FormInput/FormInput";

export function PostsForm() {
  const { posts, addPostMutation } = usePosts();

  const [formInputs, setFormInputs] = useState({
    title: "",
    description: "",
    author: "",
  });

  const handleAddNewPost = () => {
    const { title, description, author } = formInputs;

    if (title && description && author) {
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;

      addPostMutation.mutate({
        ...formInputs,
        id,
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

  return (
    <div className="form-container">
      <FormInput
        value={formInputs.title}
        fieldName="title"
        setFormInputs={setFormInputs}
      />
      <FormInput
        value={formInputs.description}
        fieldName="description"
        setFormInputs={setFormInputs}
      />
      <FormInput
        value={formInputs.author}
        fieldName="author"
        setFormInputs={setFormInputs}
      />
      <button onClick={handleAddNewPost} className="add-post-btn">
        Add a new post
      </button>
    </div>
  );
}
