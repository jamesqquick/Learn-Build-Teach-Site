import React from "react";

export default props => {
  return (
    <button className={"btn " + props.classString} onClick={props.onBtnClick}>
      {props.btnText}
    </button>
  );
};
