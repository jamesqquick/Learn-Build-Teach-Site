import React from "react"
import logo from "../images/logo360-white.svg"
import { StyledHero } from "../elements/Hero"
import { LinkButton } from "../elements/Button"
export default () => {
  return (
    <StyledHero>
      <img className="hero-image" src={logo} alt="Learn Build Teach Logo." />
      <h1 className="hero-title">DEVELOPMENT, DESIGN, AND TOOLS</h1>
      <h4 className="hero-subtitle">
        Let's build a community that learns together!
      </h4>
      <LinkButton href="#courses">Start Learning!</LinkButton>
    </StyledHero>
  )
}
