import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
export default function FullscreenVideo({ video, onClose }) {
  return (
    <div className="fullscreen-video">
      <FontAwesomeIcon
        id="closeIcon"
        icon={faTimes}
        size="2x"
        onClick={onClose}
      />
      <div className="video-responsive">
        {/* <iframe
          id="videoEmbed"
          width="1120"
          height="630"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameborder="0"
          allowfullscreen
        /> */}

        <iframe
          id="videoEmbed"
          width="1120"
          height="630"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.title}
        />
      </div>
    </div>
  );
}
