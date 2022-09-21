import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";
const User = ({ user, ...rest }) => {

  return (
    <>
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((user) => (
            <Qualitie key={user._id} name={user.name} color={user.color} />
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{`${user.rate}/5`}</td>
        <td>
        <Bookmark userId={user._id} status={user.bookmark}  onToggle={rest.onToggle}/>
        </td>
        <td>
          <button
            className={"btn btn-danger"}
            onClick={() => rest.onDelete(user._id)}
          >
            Удалить
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
