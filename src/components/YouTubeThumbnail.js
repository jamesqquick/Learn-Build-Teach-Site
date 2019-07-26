import React from "react"
import { StyledImageCard } from "../elements/Card"
export class YouTubeThumbnail extends React.Component {
  render = () => {
    return (
      <StyledImageCard
        className="youtube-thumbnail"
        onClick={() => this.props.showFullscreenVideo(this.props.video)}
      >
        <img src={this.props.video.thumbnail.url} alt="" />
      </StyledImageCard>
    )
  }
}
