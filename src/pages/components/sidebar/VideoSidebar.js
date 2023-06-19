import React, { useState } from "react";
import "./videoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function VideoSidebar({ following, likes, messages, save, shares }) {
  const [liked, setLiked] = useState(false);
  const [followed, setFollowed] = useState(false);
  const[saved, setSaved] = useState(false);

  const handdleLike = () => {
    setLiked(!liked);
  };

  const handdleFollow = () => {
    setFollowed(!followed);
  };

  const handdleSaved = () =>{
    setSaved(!saved);
  }

  return (
    <div className="videoSidebar">
       <div className="videoSidebar__options" onClick={handdleFollow}>
        {followed ? <HowToRegIcon fontSize="large"/> : <PersonAddIcon fontSize="large" />}
      </div>

      <div className="videoSidebar__options" onClick={handdleLike}>
        {liked ? (
          <FavoriteIcon className="liked" fontSize="large"/>
        ) : (
          <FavoriteIcon fontSize="large"/>
        )}
        <p>{liked ? likes + 1 : likes}</p>
      </div>

      <div className="videoSidebar__options">
        <ChatIcon fontSize="large"/>
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__options"  onClick={handdleSaved}>
      {saved ? (
          <BookmarkIcon  className="saved" fontSize="large"/>
        ) : (
          <BookmarkIcon  fontSize="large"/>
        )}
        <p>{saved? save + 1 : save}</p>
      </div>

      <div className="videoSidebar__options">
        <WhatsAppIcon className="shared"  fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
