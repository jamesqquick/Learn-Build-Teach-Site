import React from "react";
import Button from "./button";

export default class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: ""
    };
  }
  render() {
    return (
      <form>
        <p>
          Want to stay up to date with our latest content in Web Development,
          Design, and Tools? Subscribe to our newsletter!{" "}
        </p>
        <div className="flex flex-child-grow-1">
          <input type="text" name="emailInput" placeholder="Email" />
          <Button btnText="Subscribe" onBtnClick={this.onSubscribeClick} />
        </div>
      </form>
    );
  }

  onSubscribeClick = e => {
    console.log("on subscribe");
    e.preventDefault();
  };
}
