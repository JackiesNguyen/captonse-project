import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";
//
import "./FeaturedHotel.scss";
import CardHotel from "../CardHotel/CardHotel";

const FeaturedHotel = (props) => {
  const { hotels } = props;
  return (
    <div className="featuredHotel">
      <div className="featuredHotel__container">
        <div className="featuredHotel__head">
          <h2>Khách sạn nổi bật tại Đà Nẵng</h2>
          <p>
            Khám phá các khách sạn được đánh giá rất tốt, Giá cả hợp lý và có vị
            trí đẹp
          </p>
        </div>
        <div className="featuredHotel__cards">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            loop={true}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
          >
            {hotels.map((hotel) =>
              hotel.rating >= 4 ? (
                <SwiperSlide>
                  <CardHotel hotel={hotel} />
                </SwiperSlide>
              ) : null
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default FeaturedHotel;
