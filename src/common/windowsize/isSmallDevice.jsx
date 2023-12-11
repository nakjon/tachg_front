import { useEffect, useState } from 'react';

const useSmallDevice = () => {
  const [isSmallDevice, setSmallDevice] = useState(window.innerWidth < 690);

  useEffect(() => {
    const handleResize = () => {
      setSmallDevice(window.innerWidth < 690);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isSmallDevice;
};

export default useSmallDevice;
