import React from "react";
import {StyledSplitView} from "../elements/SplitView"
export default props => {
  return (
    <StyledSplitView>
      {props.children[0]}
      {props.children[1]}
    </StyledSplitView>
  );
};
