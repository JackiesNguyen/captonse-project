import React from "react";
import "./CardHotel.scss";
import Rating from "../../../../components/Rating/Rating";
import { Link } from "react-router-dom";

const CardHotel = ({ hotel, address, desc, view }) => {
  const formatPrice = (num) => {
    const stringNum = num.toString();
    const format = stringNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return format;
  };
  return (
    <div className="cardHotel" key={hotel._id}>
      <div className="cardHotel__img">
        <img src={hotel.images[0]} alt="hotels" />
        {view && (
          <p className="view__link">
            <Link to={`/khach-san/${hotel.slug}`}>Xem chi tiết</Link>
          </p>
        )}
      </div>
      <div className="cardHotel__content">
        <Link to={`/khach-san/${hotel.slug}`} className="cardHotel__name">
          {hotel.name}
        </Link>
        {address && (
          <p className="cardHotel__address">
            <i
              className="fa-solid fa-location-dot"
              style={{ marginRight: "5px" }}
            ></i>
            {hotel.address}
          </p>
        )}
        {desc && <p className="cardHotel__desc">{hotel.description}</p>}
        <Rating numReviews={hotel.numReviews} rating={hotel.rating} setColor />
        <div className="cardHotel__price">{formatPrice(hotel.price)} đ</div>
        <ul className="cardHotel__tags">
          {hotel.tags.map((tag, index) => (
            <li className="cardHotel__tag" key={index}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardHotel;
