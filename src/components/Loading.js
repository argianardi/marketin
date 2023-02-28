import React from "react";
import loadingImage from "../images/loading.gif";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <img src={loadingImage} alt="Loading image" />
    </div>
  );
};

export default Loading;
