import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/css/effect-fade";
import "./Banner.scss";

// import required modules
import { Navigation, Autoplay, EffectFade } from "swiper";
//
import { caurong, chualinhung, bantayphat } from "./import";

const Banner = () => {
  return (
    <div className="banner">
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
            <img alt="" src={caurong} className="banner__img" />
            <div className="banner__content">
              <h4>Đến với chúng tôi</h4>
              <h2>Thư giãn và trải nghiệm</h2>
              <p>
                Đà Nẵng được mệnh danh là thành phố đáng sống nhất Việt Nam. Hãy
                đến và khám phá những địa điểm du lịch tốt nhất dành cho bạn
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__container">
            <img alt="" src={chualinhung} className="banner__img" />
            <div className="banner__content">
              <h4>Đến với chúng tôi</h4>
              <h2>Thư giãn và trải nghiệm</h2>
              <p>
                Đà Nẵng được mệnh danh là thành phố đáng sống nhất Việt Nam. Hãy
                đến và khám phá những địa điểm du lịch tốt nhất dành cho bạn
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner__container">
            <img alt="" src={bantayphat} className="banner__img" />
            <div className="banner__content">
              <h4>Đến với chúng tôi</h4>
              <h2>Thư giãn và trải nghiệm</h2>
              <p>
                Đà Nẵng được mệnh danh là thành phố đáng sống nhất Việt Nam. Hãy
                đến và khám phá những địa điểm du lịch tốt nhất dành cho bạn
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Banner;
