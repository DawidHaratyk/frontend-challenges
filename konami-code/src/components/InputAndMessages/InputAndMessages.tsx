import { useState } from "react";
import { MessageProps } from "../../types/api";
import { Input } from "../Input/Input";
import { SecretMessages } from "../SecretMessages/SecretMessages";

export function InputAndMessages() {
  const [messagesList, setMessagesList] = useState<MessageProps[]>([]);

  return (
    <div className="input-and-messages-container">
      <Input setMessagesList={setMessagesList} />
      <SecretMessages messagesList={messagesList} />
    </div>
  );
}
