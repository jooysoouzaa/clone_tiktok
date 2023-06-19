import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import LiveTvIcon from "@mui/icons-material/LiveTv";

function Header() {
  return (
    <div className="header__container">
      <div className="header">
        <div className="header__icon">
          <LiveTvIcon className="header__liveIcon" />
        </div>
        <div className="header__item_text">
          <div className="header__text Gray">
            <p>Música</p>
          </div>
          <div className="header__text Gray">
            <p>Seguindo</p>
          </div>
          <div className="header__text">
            <p className="header__highlightedText">Para você</p>
          </div>
        </div>
        <div className="header__icon">
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
