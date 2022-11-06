import React, { useMemo } from "react";
import { getPeople, getQuery } from "../redux/people/selectors";

function People(props) {
  const people = getPeople();
  const query = getQuery();

  const searchedPeople = useMemo(() =>
    people.map(({ name, id }) => {
      if (name.toLowerCase().includes(query.toLowerCase()))
        return (
          <div className="App-box" key={id}>
            {name}
          </div>
        );
    })
  );

  return <div>{searchedPeople}</div>;
}

// make a research how use propTypes here properly
People.propTypes = {
  // ...
};

export default People;
