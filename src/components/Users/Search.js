import React, { useState } from "react";
import PropTypes from "prop-types";

const Search = ({ fireAlert, findUser, showClear, clearUsers }) => {
  const [name, setName] = useState("");

  const find = (e) => {
    e.preventDefault();
    if (name === "") {
      fireAlert("Please Enter the username before searching", "info");
    } else {
      findUser(name);
      setName("");
    }
  };
  return (
    <form className="form" onSubmit={find}>
      <input
        type="text"
        name="name"
        placeholder="Enter the username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="btn btn-dark btn-block">
        Search
      </button>
      {showClear && (
        <button
          className="btn btn-clear btn-block"
          type="submit"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </form>
  );
};

Search.propTypes = {
  findUser: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  fireAlert: PropTypes.func.isRequired,
};

export default Search;
