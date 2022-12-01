import React from "react";
import Banner from "../../components/Banner/Banner";
import MostDestination from "../../components/MostDestination/MostDes";
import TopDestination from "../../components/TopDestination/TopDestination";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopDestination />
      <MostDestination />
    </div>
  );
};

export default Home;
