import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";
const User = ({ user }) => {
  return (
    <>
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>
          <Qualitie />
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{`${user.rate}/5`}</td>
        <td>
          <Bookmark />
        </td>
        <td>
          <button
            className={"btn btn-danger"}
            // onClick={() => }
          >
            Удалить
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
