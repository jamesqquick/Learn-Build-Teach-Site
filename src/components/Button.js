import React from "react";
import { Button } from "../elements/Button";

export default props => {
  return (
    <Button
      onClick={props.onBtnClick}
    >
      {props.children}
    </Button>
  );
};
