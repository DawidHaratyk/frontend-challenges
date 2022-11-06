import React, { useMemo } from "react";
import { getPeople, getQuery } from "../redux/people/selectors";

export default function People() {
  const people = getPeople();
  const query = getQuery();

  let searchedPeople = useMemo(() =>
    people.map(({ name, id }) => {
      if (name.toLowerCase().includes(query.toLowerCase()))
        return (
          <div className="App-box" key={id}>
            {name}
          </div>
        );
    })
  );

  searchedPeople = searchedPeople.filter((person) => person !== undefined);

  return (
    <div>
      {searchedPeople.length
        ? searchedPeople
        : "There are no matching people to this search query"}
    </div>
  );
}
