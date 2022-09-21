import React from "react";
import User from "./user";

const Users = ({ users, ...rest }) => {

  return (
    <>
      {users.map((user) => (
        <User key={user._id} user={user} onDelete={rest.onDelete} onToggle={rest.onToggle}/>
      ))}
    </>
  );
};

export default Users;
