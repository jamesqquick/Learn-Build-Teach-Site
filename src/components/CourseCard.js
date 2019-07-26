import React, { Component } from "react"
import Card from "./Card"

export const CARD_TYPES = {
  horizontal: "horizontal",
}

export default class CourseCard extends Component {
  render() {
    const {
      title,
      description,
      image,
      imageAlt,
      url,
      hours,
      videos,
      tag,
      id,
    } = this.props.course
    return (
      <Card
        image={image}
        imageAlt={imageAlt}
        overlayUrl={url}
        tag={tag}
        key={id}
        type={this.props.type}
      >
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>
            <strong>{videos}</strong> videos <strong>{hours}</strong> hours
          </p>
        </div>
      </Card>
    )
  }
}
