import { Dispatch, SetStateAction } from "react";
import { MessageProps } from "../types/api";
import { getSecretMessages } from "./getSecretMessages";

export const handleMessagesListState = async (
  setMessagesList: Dispatch<SetStateAction<MessageProps[]>>,
  setSearchValue: Dispatch<SetStateAction<string>>
) => {
  const secretMessagesList = await getSecretMessages();

  const sortedMessagesByDate = secretMessagesList.sort(
    (currentMessage, nextMessage) => {
      return Number(currentMessage.created_at) - Number(nextMessage.created_at);
    }
  );

  // array of 5 newest messages
  const newestMessages = sortedMessagesByDate.slice(0, 5);

  setMessagesList(newestMessages);
  setSearchValue("");

  setTimeout(() => {
    setMessagesList([]);
  }, 15000);
};
