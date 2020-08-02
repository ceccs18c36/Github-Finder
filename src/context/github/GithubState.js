import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  CLEAR_USERS,
  FIND_USERS,
  GET_REPO,
  GET_USER,
  SET_ALERT,
  SET_LOADING,
} from "../types";

const GithubState = (props) => {
  const initialstate = {
    user: {},
    users: [],
    loading: false,
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialstate);

  // Search user

  // Get User

  // Get Repos

  // Clear Users

  // Set Loading

  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        loading: state.loading,
        repos: state.repos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
