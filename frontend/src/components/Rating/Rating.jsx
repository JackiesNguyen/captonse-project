import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
//
import "./Rating.scss";

const Rating = (props) => {
  const { rating, numReviews, setColor } = props;
  return (
    <div className={!setColor ? "rating" : "rating rating-bl-clr"}>
      <div className="rating__star">
        <span>
          {rating >= 1 ? (
            <AiFillStar />
          ) : rating >= 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <AiOutlineStar />
          )}
        </span>
        <span>
          {rating >= 2 ? (
            <AiFillStar />
          ) : rating >= 1.5 ? (
            <FaStarHalfAlt />
          ) : (
            <AiOutlineStar />
          )}
        </span>
        <span>
          {rating >= 3 ? (
            <AiFillStar />
          ) : rating >= 2.5 ? (
            <FaStarHalfAlt />
          ) : (
            <AiOutlineStar />
          )}
        </span>
        <span>
          {rating >= 4 ? (
            <AiFillStar />
          ) : rating >= 3.5 ? (
            <FaStarHalfAlt />
          ) : (
            <AiOutlineStar />
          )}
        </span>
        <span>
          {rating >= 5 ? (
            <AiFillStar />
          ) : rating >= 4.5 ? (
            <FaStarHalfAlt />
          ) : (
            <AiOutlineStar />
          )}
        </span>
      </div>
      {numReviews ? (
        <span className="rating__numReviews">{numReviews} reviews</span>
      ) : null}
    </div>
  );
};

export default Rating;
