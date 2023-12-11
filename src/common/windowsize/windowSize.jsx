import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return size;
};

export default useWindowSize;
