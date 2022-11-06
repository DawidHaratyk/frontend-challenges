import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { secretCode } from "../../constants";
import { InputProps } from "../../types/api";
import { handleMessagesListState } from "../../utils/handleMessagesListState";

export function Input({ setMessagesList }: InputProps) {
  const [searchValue, setSearchValue] = useState("");
  const [searchValueFiveSecondsAgo, setSearchValueFiveSecondsAgo] =
    useState("");

  const handleSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setSearchValueFiveSecondsAgo(e.target.value);
  };

  const handleKeyDownAction = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setSearchValue("");
    }
  };

  useEffect(() => {
    if (searchValue === secretCode) {
      handleMessagesListState(setMessagesList, setSearchValue);
    }

    const inputTimeout = setTimeout(() => {
      if (searchValue === searchValueFiveSecondsAgo) {
        setSearchValue("");
      }
    }, 5000);

    return () => clearTimeout(inputTimeout);
  }, [searchValue, setMessagesList, searchValueFiveSecondsAgo]);

  return (
    <input
      type="text"
      className="message-search-input"
      placeholder="What's the konami code?"
      value={searchValue}
      onChange={(e) => handleSearchValueChange(e)}
      onKeyDown={(e) => handleKeyDownAction(e)}
    />
  );
}
