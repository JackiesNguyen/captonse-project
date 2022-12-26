import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import "./Banner.scss";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/effect-fade";
import "./Banner.scss";

import { Navigation, Autoplay, EffectFade } from "swiper";
//
import { hotelBanner1, hotelBanner2, hotelBanner3 } from "./import";

const Banner = (props) => {
  const { image } = props;
  return (
    <div className={!image ? "banner" : "bannerImg"}>
      {image ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={true}
          effect={"fade"}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, EffectFade]}
        >
          <SwiperSlide>
            <div className="banner__container">
              <img alt="" src={hotelBanner1} className="banner__img" />
              <div className="banner__content">
                <h4>Đến với chúng tôi</h4>
                <h2>Thư giãn và trải nghiệm</h2>
                {/* <p>Thư giãn và trải ngiệm</p> */}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner__container">
              <img alt="" src={hotelBanner2} className="banner__img" />
              <div className="banner__content">
                <h4>Đi ngay bây giờ </h4>
                <h2>Khám phá và du lịch</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner__container">
              <img alt="" src={hotelBanner3} className="banner__img" />
              <div className="banner__content">
                <h4>Sự lựa chọn của bạn</h4>
                <h2>Một kỳ nghỉ hoàn hảo</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <video className="banner__video" autoPlay loop muted>
          <source
            src="https://res.cloudinary.com/dulkwgwws/video/upload/v1671172287/Video/danang_lvport.mp4"
            type="video/mp4"
          />
        </video>
      )}

      <SearchBox />
    </div>
  );
};

export default Banner;
