import React, { Fragment } from "react";
import Search from "../Users/Search";
import Alert from "../layout/Alert";
import Users from "../Users/Users";

const Home = (props) => (
  <Fragment>
    <Alert />
    <Search />
    <Users />
  </Fragment>
);

export default Home;
