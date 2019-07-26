import React from "react"
import { StyledPhilosophy } from "../elements/Philosophy"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "me-circle.png" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fixed(width: 180, height: 180) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <StyledPhilosophy id="philosophy">
      <div className="philosophy-content">
        <div className="bullets-container">
          <div className="bullet">
            <h1>LEARN</h1>
            <p> the tech.</p>
          </div>
          <div className="bullet">
            <h1>BUILD</h1>
            <p> something cool.</p>
          </div>
          <div className="bullet">
            <h1>TEACH</h1>
            <p> it to others.</p>
          </div>
        </div>
        <div id="bulletImgContainer">
          <Img fixed={data.file.childImageSharp.fixed} />
        </div>
        {/* <img id="profilePic" alt="James Q Quick circle" src={meCirlce} /> */}
      </div>
      <p>
        Hi! I’m <strong>James Q Quick</strong>, the founder of{" "}
        <strong>Learn Build Teach</strong>. I am a self-taught Web Developer
        with a desire to learn and a passion for teaching. I want to share that
        passion with you on this platform!
      </p>
      <br></br>
      <br></br>

      <p>
        Interested in content updates? <a href="#newsletter">Sign up here</a>.
      </p>
    </StyledPhilosophy>
  )
}
