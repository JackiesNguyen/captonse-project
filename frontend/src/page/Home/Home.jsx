import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import LoadingClient from "../../components/LoadingClient/LoadingClient";
import MostDestination from "../../components/MostDestination/MostDes";
import TopDestination from "../../components/TopDestination/TopDestination";
import "./Home.scss";

const Home = () => {
  window.scrollTo(0, 0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="home">
      {loading ? (
        <LoadingClient loading={loading} />
      ) : (
        <div className="home__container">
          {" "}
          <Banner />
          <TopDestination />
          <MostDestination />
        </div>
      )}
    </div>
  );
};

export default Home;
