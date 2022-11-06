import { Dispatch, SetStateAction } from "react";

interface FormInputs {
  title: string;
  description: string;
  author: string;
}

interface FormInputProps {
  value: string;
  fieldName: string;
  setFormInputs: Dispatch<SetStateAction<FormInputs>>;
}

export function FormInput({ value, fieldName, setFormInputs }: FormInputProps) {
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
    <label htmlFor={`post-${fieldName}`}>
      Post {fieldName}:
      <input
        type="text"
        placeholder={`Post ${fieldName}...`}
        className="form-input"
        value={value}
        onChange={(e) => handleFormStateChange(e, fieldName)}
      />
    </label>
  );
}
