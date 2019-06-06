import React from "react";

const Display = ({ displayClass, count }) => {
  return (
    <React.Fragment>
      <input type="text" className={displayClass} value={count} readOnly />
    </React.Fragment>
  );
};

export default Display;
