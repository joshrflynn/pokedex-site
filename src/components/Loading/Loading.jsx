import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <img src="pokeball.gif" alt="" className="gif" />
      <p>Currently catching them all...</p>
    </div>
  );
};

export default Loading;
