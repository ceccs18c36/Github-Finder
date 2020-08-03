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
    alert: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialstate);

  // Search user
  const findUsers = async (name) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    dispatch({ type: FIND_USERS, payload: res.data.items });
  };

  //Fetching User details
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    dispatch({ type: GET_USER, payload: res.data });
  };

  //Featching User repo details
  const getRepo = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    dispatch({ type: GET_REPO, payload: res.data });
  };

  // Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  //SetAlert
  const fireAlert = (message, type) => {
    dispatch({ type: SET_ALERT, payload: { msg: message, type: type } });
    setTimeout(() => dispatch({ type: SET_ALERT, payload: null }), 3000);
  };
  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        loading: state.loading,
        repos: state.repos,
        findUsers,
        getUser,
        getRepo,
        clearUsers,
        fireAlert,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
