import React, { useState, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/Users/Users";
import User from "./components/Users/User";
import Search from "./components/Users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import GithubState from "./context/github/GithubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const findUsers = async (name) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${name}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setUsers(res.data.items);
    setLoading(false);
  };

  //Fetching User details
  const getUser = async (username) => {
    setLoading(true);
    setUser({});
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  };
  //Featching User repo details
  const getRepo = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const fireAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fa fa-github" />
          <Switch>
            <div className="container">
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Alert alert={alert} />
                    <Search
                      findUser={findUsers}
                      clearUsers={clearUsers}
                      showClear={users.length > 0 ? true : false}
                      fireAlert={fireAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={getUser}
                    user={user}
                    loading={loading}
                    getRepo={getRepo}
                    repos={repos}
                  />
                )}
              />
            </div>
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
