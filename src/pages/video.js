import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/videoFooter";
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
        src="https://video-eminem.vercel.app/download.mp4"
      ></video>
      {/*Side Bar*/}
     <VideoFooter />
    </div>
  );
}

export default Video;

