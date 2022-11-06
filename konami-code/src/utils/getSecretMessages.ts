import { API } from "../constants";
import { MessageProps } from "../types/api";

export const getSecretMessages = async () => {
  const response = await fetch(API);
  const data: MessageProps[] = await response.json();
  return data;
};
