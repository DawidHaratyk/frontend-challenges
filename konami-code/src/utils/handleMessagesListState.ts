import { Dispatch } from "react";
import { MessageProps } from "../types/api";
import { getSecretMessages } from "./getSecretMessages";

export const handleMessagesListState = async (
  setMessagesList: Dispatch<React.SetStateAction<MessageProps[]>>,
  setSearchValue: Dispatch<React.SetStateAction<string>>
) => {
  const secretMessagesList = await getSecretMessages();

  const sortedMessagesByDate = secretMessagesList.sort(
    (currentMessage: MessageProps, nextMessage: MessageProps) => {
      return Number(currentMessage.created_at) - Number(nextMessage.created_at);
    }
  );

  const newestMessages = sortedMessagesByDate.slice(0, 5);

  setMessagesList(newestMessages);
  setSearchValue("");

  setTimeout(() => {
    setMessagesList([]);
  }, 15000);
};
