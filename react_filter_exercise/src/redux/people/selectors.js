import { useSelector } from "react-redux";

export const getPeople = () => {
  const people = useSelector((state) => state.people.list);

  return people;
};

export const getQuery = () => {
  const query = useSelector((state) => state.people.query);

  return query;
};
