import React from "react";
import "../sass/youtube.scss";
import FullscreenVideo from "./FullscreenVideo.js";
export class YouTubeThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showVideo: false
    };
    this.closeVideo = this.closeVideo.bind(this);
  }

  render = () => {
    return (
      <div className="youtube-thumbnail" onClick={this.showFullscreenVideo}>
        {this.state.showVideo && (
          <FullscreenVideo onClose={this.closeVideo} video={this.props.video} />
        )}
        <img src={this.props.video.thumbnail} alt="" />
      </div>
    );
  };

  closeVideo = () => {
    console.log("closing video");
    this.setState({ showVideo: false });
  };

  showFullscreenVideo = () => {
    this.setState({ showVideo: true });
  };
}
