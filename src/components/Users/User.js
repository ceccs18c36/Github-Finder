import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repo from "../Repos/Repo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const { getUser, getRepo, user, repos, loading } = useContext(GithubContext);
  useEffect(() => {
    getUser(match.params.login);
    getRepo(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    hireable,
    avatar_url,
    html_url,
    blog,
    login,
    company,
    location,
    bio,
    public_gists,
    public_repos,
    followers,
    following,
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        <i className="fa fa-arrow-circle-left"></i> Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fa fa-check text-success"></i>
      ) : (
        <i className="fa fa-times text-danger "></i>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt="Avatar"
            className="round-img"
            style={{ width: "150px" }}
          />
          <h3>{login}</h3>
          {location && <p>Location:: {location}</p>}
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio:</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1" target="blank">
            Visit on Github
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username:</strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong>
                  {blog}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repo repos={repos} />
    </Fragment>
  );
};

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
};
export default User;
