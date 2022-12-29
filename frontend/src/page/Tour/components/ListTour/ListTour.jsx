import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListTour.scss";
import CardTour from "../CardTour/CardTour";

const ListTour = ({ tours }) => {
  const [listTimes, setListTimes] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("/api/tours/times");
        setListTimes(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, [setListTimes]);
  return (
    <div className="listTour">
      {listTimes.map((time, index) => (
        <div key={index}>
          <div className="listTour__title">Tour du lịch {time}</div>
          <div className="tour__global">
            <div className="tour__global-list">
              {tours.map((tour) =>
                tour.time === time ? (
                  <CardTour tour={tour} key={tour._id} />
                ) : null
              )}
            </div>

            {}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTour;
