import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import bantayphat from "../../../assets/images/bantayphat.jpg";
import SearchBox from "../../SearchBox/SearchBox";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const TourLayout = () => {
  return (
    <div className="tourLayout">
      <Header />
      <Box style={{ position: "relative" }}>
        <img
          src={bantayphat}
          alt=""
          style={{ width: "100%", height: "500px", objectFit: "cover" }}
        />
        <SearchBox />
      </Box>
      <div className="tourLayout__content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default TourLayout;
