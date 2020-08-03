import React, { useContext } from "react";
import UserCard from "./UserCard";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={Userstyle}>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const Userstyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

export default Users;
