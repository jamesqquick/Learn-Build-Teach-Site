import React from "react";
import "../sass/newsletter.scss";
export default class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: ""
    };
  }
  render() {
    const validEmail = this.validateEmail(this.state.emailInput);
    return (
      <form className="newsletter" onSubmit={this.onSubscribeClick}>
        <p>
          Want to stay up to date with our latest content in Web Development,
          Design, and Tools? Subscribe to our newsletter!{" "}
        </p>
        <div className="flex flex-child-grow-1">
          <input
            type="email"
            name="emailInput"
            placeholder="Email"
            onChange={this.onInputChange}
          />
          <button className="btn" disabled={!validEmail}>
            Subscribe
          </button>
        </div>
      </form>
    );
  }

  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  onSubscribeClick = e => {
    e.preventDefault();
    console.log("on subscribe");
  };

  onInputChange = e => {
    const name = e.target.name;
    const text = e.target.value;
    this.setState({ [name]: text });
  };
}
