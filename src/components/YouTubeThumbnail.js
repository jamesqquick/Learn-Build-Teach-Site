import React from "react";
import "../sass/youtube.scss";
export class YouTubeThumbnail extends React.Component {
  render = () => {
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
