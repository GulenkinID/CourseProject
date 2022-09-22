import React from "react";

const Qualitie = ({ color, name }) => {
  return <span className={"badge me-2 bg-" + color}>{name}</span>;
};

export default Qualitie;
