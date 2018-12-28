import React from "react";
import "../sass/youtube.scss";
import FullscreenVideo from "./FullscreenVideo.js";
export class YouTubeThumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  render = () => {
    console.log("rendering");
    return (
      <div
        className="youtube-thumbnail"
        onClick={() => this.props.showFullscreenVideo(this.props.video)}
      >
        <img src={this.props.video.thumbnail} alt="" />
      </div>
    );
  };
}
