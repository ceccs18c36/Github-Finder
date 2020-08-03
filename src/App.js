import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/Users/Users";
import User from "./components/Users/User";
import Search from "./components/Users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import GithubState from "./context/github/GithubState";

const App = () => {
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
                    <Alert />
                    <Search />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => <User {...props} />}
              />
            </div>
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
