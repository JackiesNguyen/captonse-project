import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Banner from "../../Banner/Banner";
import { Outlet } from "react-router-dom";

const HotelLayout = () => {
  return (
    <div className="hotelLayout">
      <Header />
      <Banner image />
      <div className="hotelLayout__content">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default HotelLayout;
