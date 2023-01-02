import React from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Loading = (props) => {
  const { loading } = props;
  return (
    <div className="loading" style={{ texAlign: "center" }}>
      <ClockLoader
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
        color="#6439ff"
        speedMultiplier={1}
      />
    </div>
  );
};

export default Loading;
