import React, { Component } from "react"
import { YouTubeThumbnail } from "./YouTubeThumbnail"
import FullscreenVideo from "./FullscreenVideo"
import { LinkButton } from "../elements/Button"
import { StyledGallery } from "../elements/Gallery"
import { StaticQuery, graphql } from "gatsby"

export default class YouTubeGallery extends Component {
  state = {
    selectedVideo: null,
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allYoutubeVideo {
              edges {
                node {
                  videoId
                  title
                  description
                  publishedAt
                  thumbnail {
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div className="container">
            {!!this.state.selectedVideo && (
              <FullscreenVideo
                onClose={this.closeVideo}
                video={this.state.selectedVideo}
              />
            )}
            <StyledGallery>
              {!data ? (
                <p>Failed to get youtube data :(</p>
              ) : (
                data.allYoutubeVideo.edges.map(({ node }) => (
                  <YouTubeThumbnail
                    video={node}
                    key={node.videoId}
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
        )}
      />
    )
  }

  closeVideo = () => {
    this.setState({ selectedVideo: null })
  }

  showFullscreenVideo = video => {
    this.setState({ selectedVideo: video })
  }
}
