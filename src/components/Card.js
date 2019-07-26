import React from "react"
import { StyledCard, CardImage, CardContent } from "../elements/Card"
import Img from "gatsby-image"

export default function card(props) {
  const { overlayUrl, image, imageAlt } = props
  return (
    <StyledCard type={props.type}>
      {/* {tag && <CardTag>{tag}</CardTag>} */}
      {overlayUrl && <a className="card-overlay" href={overlayUrl}></a>}
      <CardImage type={props.type}>
        <Img fluid={image.childImageSharp.fluid} alt={imageAlt} />
      </CardImage>
      <CardContent>{props.children[0] || props.children}</CardContent>
    </StyledCard>
  )
}
