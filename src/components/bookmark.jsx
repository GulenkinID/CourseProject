import React from "react";

const Bookmark = ({ status, ...rest }) => {
  return (
    <button className="btn btn-sm btn-outline-danger" {...rest}>
      <i className={`bi bi-bookmark${status ? "-heart-fill" : ""}`}></i>
    </button>
  );
};

export default Bookmark;
