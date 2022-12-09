import React from "react";
import HashLoader from "react-spinners/HashLoader";

const LoadingClient = (props) => {
  const { loading } = props;
  return (
    <div className="loading">
      <HashLoader
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#d02245"
        speedMultiplier={1}
      />
    </div>
  );
};

export default LoadingClient;
