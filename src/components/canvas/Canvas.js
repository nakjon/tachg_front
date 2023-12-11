import React from "react";
import PropTypes from "prop-types";

const Canvas = ({ draw, height, width, captcha }) => {
  const canvas = React.useRef();

  React.useEffect(() => {
    const context = canvas.current.getContext("2d");
    context.clearRect(0, 0, width, height);
    draw(context);
  }, [captcha]);

  return <canvas ref={canvas} height={height} width={width} />;
};

Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  captcha: PropTypes.any,
};

export default Canvas;
