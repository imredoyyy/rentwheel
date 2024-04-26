import { useLayoutEffect, useState } from "react";

export default function UseWindowSize() {
  const [size, setSize] = useState({ width: null });

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
