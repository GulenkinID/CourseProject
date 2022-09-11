import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    setUsers((prevState) =>
      prevState.filter((user) => {
        return user._id !== userId;
      })
    );
  };

  const setColorQualities = (color) => {
    let defaultStyles = "me-2 badge bg-";
    defaultStyles += color;
    return defaultStyles;
  };

  const renderPhrase = (countUsers) => {
    let human = "человек";
    let clubbing = "";
    const test = [2, 3, 4];
    const lastNumber = countUsers % 10;
    const exeption = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    const TwoLastNumber = countUsers % 100;
    human +=
      test.includes(lastNumber) && !exeption.includes(TwoLastNumber) ? "a" : "";
    clubbing =
      test.includes(lastNumber) && !exeption.includes(TwoLastNumber)
        ? "тусанут"
        : "тусанёт";
    return (
      <>
        <span className="badge bg-primary">{`${countUsers} ${human} ${clubbing} с тобой сегодня`}</span>
      </>
    );
  };

  const addUsersInfo = () => {
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((quality) => (
            <span
              className={setColorQualities(quality.color)}
              key={quality._id}
            >
              {quality.name}
            </span>
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{`${user.rate}/5`}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              return handleDelete(user._id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };
  const messageIfListOfUsersIsEmpty = (
    <span className="badge bg-danger">Никто не тусанёт с тобой сегодня</span>
  );
  return users.length === 0 ? (
    <h2>{messageIfListOfUsersIsEmpty}</h2>
  ) : (
    <>
      <h2>{renderPhrase(users.length)}</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>{addUsersInfo()}</tbody>
      </table>
    </>
  );
};

export default Users;
