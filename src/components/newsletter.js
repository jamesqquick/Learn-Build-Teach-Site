import React from "react";
import "../sass/newsletter.scss";

export default class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      subscribed: false
    };
  }
  render() {
    const validEmail = this.validateEmail(this.state.email);
    return (
      <React.Fragment>
        {!this.state.subscribed ? (
          <form className="newsletter" onSubmit={this.onSubscribeClick}>
            <p>
              Want to stay up to date with our latest content in Web
              Development, Design, and Tools? Subscribe to our newsletter!{" "}
            </p>
            <div className="flex flex-child-grow-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={this.onInputChange}
                value={this.state.email}
              />
              <button className="btn" disabled={!validEmail}>
                Subscribe
              </button>
            </div>
          </form>
        ) : (
          <h2 className="text-center">Thanks for subscribing!</h2>
        )}
      </React.Fragment>
    );
  }

  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  onSubscribeClick = async e => {
    e.preventDefault();

    try {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "post",
        body: JSON.stringify({
          email: this.state.email
        })
      });
      var body = await response.json();

      this.setState({
        email: "",
        subscribed: true
      });
    } catch (err) {
      //TODO: display popup message for failure
      console.log("err", err);
    }
  };

  onInputChange = e => {
    const name = e.target.name;
    const text = e.target.value;
    this.setState({ [name]: text });
  };
}
