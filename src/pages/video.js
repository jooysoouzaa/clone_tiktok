import React, { useRef, useState } from "react";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const  [play, setPlay]  = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">

      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://cdn.coverr.co/videos/coverr-a-dog-drinks-water-from-a-portable-pet-water-bottle-8512/1080p.mp4"
      ></video>
    </div>
  );
}

export default Video;
