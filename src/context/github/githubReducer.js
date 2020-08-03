import {
  CLEAR_USERS,
  FIND_USERS,
  GET_REPO,
  GET_USER,
  SET_ALERT,
  SET_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FIND_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPO:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
};
