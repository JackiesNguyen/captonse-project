import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const LoadingClient = (props) => {
  const { loading } = props;
  return (
    <div className="loading">
      <FadeLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#d02245"
        speedMultiplier={2}
      />
    </div>
  );
};

export default LoadingClient;
