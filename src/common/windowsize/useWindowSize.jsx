import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [isLargeDevice, setLargeDevice] = useState(window.innerWidth > 1224);

  useEffect(() => {
    const handleResize = () => {
      setLargeDevice(window.innerWidth > 1224);
      localStorage.setItem("largeDevice", window.innerWidth > 1224);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isLargeDevice;
};

export default useWindowSize;
