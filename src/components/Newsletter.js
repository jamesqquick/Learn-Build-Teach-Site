import React from "react"
import { Button } from "../elements/Button"
import * as EmailValidator from "email-validator"
import { StyledForm } from "../elements/Forms"
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StyledNewsletter } from "../elements/Newsletter"

export default class Newsletter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      subscribed: false,
      errorMsg: null,
      shake: false,
    }
  }
  render() {
    const { email, subscribed, errorMsg, shake } = this.state
    return (
      <StyledNewsletter>
        {/* <FontAwesomeIcon icon={faEnvelopeOpenText} size="4x" /> */}

        {!subscribed ? (
          <StyledForm className="newsletter" onSubmit={this.onSubscribeClick}>
            <div className="inline">
              <input
                type="email"
                name="email"
                placeholder="Email address..."
                onChange={this.onInputChange}
                value={email}
              />
              <Button
                type="submit"
                btnType="primary"
                className={shake ? " shake" : ""}
              >
                Subscribe
              </Button>
            </div>
            {!!errorMsg ? <p className="text-danger">{errorMsg}</p> : ""}
          </StyledForm>
        ) : (
          <h2 className="text-center">Thanks for subscribing!</h2>
        )}
      </StyledNewsletter>
    )
  }

  onSubscribeClick = async e => {
    e.preventDefault()

    //Check for valid email
    if (EmailValidator.validate(this.state.email)) {
      try {
        const response = await fetch("/.netlify/functions/subscribe", {
          method: "post",
          body: JSON.stringify({
            email: this.state.email,
          }),
        })

        var body = await response.json()
        console.log("body", body)

        if (response.status === 500) {
          //TODO: display popup message for failure
          const errorMsg = body.msg
          console.log(errorMsg)
          this.setState({
            errorMsg,
          })
        } else {
          this.setState({
            email: "",
            subscribed: true,
            errorMsg: null,
          })
        }
      } catch (err) {
        //TODO: display popup message for failure
        console.log("err", err)
      }
    } else {
      this.setState({
        shake: true,
      })
      setTimeout(() => {
        this.setState({
          shake: false,
        })
      }, 1000)
    }
  }

  onInputChange = e => {
    const name = e.target.name
    const text = e.target.value
    this.setState({ [name]: text })
  }
}
