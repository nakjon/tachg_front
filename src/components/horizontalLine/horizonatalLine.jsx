import React from "react";
import "./horizontalLine.css";
import useWindowSize from "src/common/windowsize/windowSize";
const HorizonatalLine = ({ text }) => {
  const size = useWindowSize();
  return (
    <span
      style={{
        fontSize: size < 438 ? "0.75rem" : size < 726 ? "0.8rem" : "1rem",
      }}
      className="horizontalLine fs-8"
    >
      {text}
    </span>
  );
};

export default HorizonatalLine;
