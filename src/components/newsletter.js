import React from "react";
import "../sass/newsletter.scss";

export default class Newsletter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      subscribed: false,
      errorMsg: null
    };
  }
  render() {
    const { email, subscribed, errorMsg } = this.state;
    return (
      <React.Fragment>
        {!subscribed ? (
          <form className="newsletter" onSubmit={this.onSubscribeClick}>
            <h2 className="title">
              Subscribe for the latest articles, videos, and courses!
            </h2>

            <div className="inline-form-input">
              <input
                type="email"
                name="email"
                placeholder="Sign me up!"
                onChange={this.onInputChange}
                value={email}
              />
              <button className="btn btn-secondary">Subscribe</button>
            </div>
            {!!errorMsg ? <p className="text-danger">{errorMsg}</p> : ""}
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

    //Check for valid email
    if (this.validateEmail(this.state.email)) {
      try {
        const response = await fetch("/.netlify/functions/subscribe", {
          method: "post",
          body: JSON.stringify({
            email: this.state.email
          })
        });

        var body = await response.json();
        console.log("body", body);

        if (response.status === 500) {
          //TODO: display popup message for failure
          const errorMsg = body.msg;
          console.log(errorMsg);
          this.setState({
            errorMsg
          });
        } else {
          this.setState({
            email: "",
            subscribed: true,
            errorMsg: null
          });
        }
      } catch (err) {
        //TODO: display popup message for failure
        console.log("err", err);
      }
    }
  };

  onInputChange = e => {
    const name = e.target.name;
    const text = e.target.value;
    this.setState({ [name]: text });
  };
}
