import React from "react";
import { User } from "../../types/api";

interface SpecificMessageProps {
  id: number;
  user: User;
  title: string;
}

export function Message({ user, title }: SpecificMessageProps) {
  return (
    <div className="message">
      <h4>Isuue name: {title}</h4>
      <h5>Author nickname: {user.login}</h5>
    </div>
  );
}
