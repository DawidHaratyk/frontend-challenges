import { MessageProps } from "../../types/api";
import { Message } from "../Message/Message";

interface SecretMessagesProps {
  messagesList: MessageProps[];
}

export function SecretMessages({ messagesList }: SecretMessagesProps) {
  const displayedMessagesList = messagesList.map((message) => (
    <Message {...message} key={message.id} />
  ));

  return <div>{displayedMessagesList}</div>;
}
