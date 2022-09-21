import React from "react";

const Bookmark = ({ status, ...rest }) => {
  return (
    <button
      type="button"
      className="btn btn-sm btn-outline-danger"
      onClick={() => rest.onToggle(rest.userId)}
    >
      <i className={`bi bi-bookmark${status ? "-fill" : ""}`}></i>
    </button>
  );
};

export default Bookmark;
