import React from "react";
import Classes from "./Tag.css";

/*individual Tag*/
const tag = props => {
  return (
    <div className={Classes.Tag}>
      <p>{props.data}</p>
    </div>
  );
};

export default tag;
