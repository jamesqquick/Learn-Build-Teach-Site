import React from "react";
import "../sass/youtube.scss";
export class YouTubeThumbnail extends React.Component {
  render = () => {
    return (
      <div className="youtube-thumbnail">
        {/* <p>{video.id}</p>
      <p>{video.name}</p>
    <p>{video.thumbnail}</p> */}
        <img src={this.props.video.thumbnail} alt="" />
      </div>
    );
  };
}
