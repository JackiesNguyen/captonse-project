import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <video className="banner__video" autoPlay loop muted>
        <source
          src="https://res.cloudinary.com/dulkwgwws/video/upload/v1671172287/Video/danang_lvport.mp4"
          type="video/mp4"
        />
      </video>
      <SearchBox />
    </div>
  );
};

export default Banner;
