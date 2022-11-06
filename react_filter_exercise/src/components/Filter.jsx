import React from "react";
import { useDispatch } from "react-redux";
import { updateQuery } from "../redux/people/actions";

function Filter(props) {
  const dispatch = useDispatch();

  const handleSearchValueChange = (e) => {
    dispatch(updateQuery(e.target.value));
  };

  return (
    <div className="App-box">
      <input
        type="text"
        placeholder="Filter"
        onChange={(e) => handleSearchValueChange(e)}
      />
    </div>
  );
}

Filter.propTypes = {
  // ...
};

export default Filter;
