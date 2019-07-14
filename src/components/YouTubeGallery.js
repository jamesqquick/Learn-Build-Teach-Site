import React, { Component } from "react";
import { YouTubeThumbnail } from "./YouTubeThumbnail";
import FullscreenVideo from "./FullscreenVideo";
import { LinkButton } from "../elements/Button";
import {StyledGallery} from "../elements/Gallery"
export default class YouTubeGallery extends Component {
  _isMounted = false;

  state = {
    videos: null,
    selectedVideo: null
  };
  componentDidMount() {
    this._isMounted = true;

    const url =
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDKVI3I7T1exxi6mIL-UkNmWYE1f7E40TI&channelId=UC-T8W79DN6PBnzomelvqJYw&part=snippet,id&order=date&maxResults=8";
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const videos = data.items
          .map((item, i) => ({
            id: item.id.videoId,
            name: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium.url
          }))
          .filter(video => !!video.id) //filter videos with no id
          .splice(0, 12); //take the first 12 videos in case we removed duplicates
        if (this._isMounted) {
          this.setState({ videos });
        }
      })
      .catch(err => {
        console.log("Error: ", err);
        //TODO: notification
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="container">
        {!!this.state.selectedVideo && (
          <FullscreenVideo
            onClose={this.closeVideo}
            video={this.state.selectedVideo}
          />
        )}
        <StyledGallery >
          {!this.state.videos ? (
            <p>Loading</p>
          ) : (
            this.state.videos.map(video => (
              <YouTubeThumbnail
                video={video}
                key={video.id}
                showFullscreenVideo={this.showFullscreenVideo}
              />
            ))
          )}
        </StyledGallery>
        <div className="text-center">
          <LinkButton
            href="https://www.youtube.com/c/jamesqquick"
            type="secondary"
          >
            View Channel!
          </LinkButton>{" "}
        </div>
      </div>
    );
  }

  closeVideo = () => {
    this.setState({ selectedVideo: null });
  };

  showFullscreenVideo = video => {
    this.setState({ selectedVideo: video });
  };
}
