import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const { findUsers, clearUsers, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [name, setName] = useState("");

  const find = (e) => {
    e.preventDefault();
    if (name === "") {
      setAlert("Please Enter the username before searching", "info");
    } else {
      findUsers(name);
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
      {users.length > 0 && (
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

export default Search;
