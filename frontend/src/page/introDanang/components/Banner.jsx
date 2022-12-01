import React from "react";
import "./Banner.scss";

const Banner = (props) => {
  const { bannerImg } = props;
  return (
    <div className="introBanner">
      <img src={bannerImg} alt="BannerIntro" />
    </div>
  );
};

export default Banner;
