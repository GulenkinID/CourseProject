import React from "react";

const Qualitie = ({ name, color, _id }) => {
  return (
    <span key={_id} className={"badge me-2 bg-" + color}>
      {name}
    </span>
  );
};

export default Qualitie;

// {user.qualities.map((quality) => (
//                       <span
//                         key={quality._id}
//                         className={"badge me-2 bg-" + quality.color}
//                       >
//                         {quality.name}
//                       </span>
//                     ))}