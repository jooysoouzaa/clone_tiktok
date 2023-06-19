import React, { useRef, useState, useEffect } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";
// import Header from "./components/header/Header";
import "./video.css";

function Video({ following, likes, messages, save, shares, name, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
  
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
    if (videoElement) {
      observer.observe(videoElement);
    }
  
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);
  

  function handleIntersection(entries) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  }

  function handleStart() {
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
        onClick={handleStart}
        loop
        src={url}
      ></video>
      {/* <Header />  */}
      <VideoSidebar following= {following} likes={likes} messages={messages} save={save} shares={shares} />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;
