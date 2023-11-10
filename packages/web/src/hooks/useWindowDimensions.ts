import { useCallback, useEffect, useState } from "react";

interface WindowDimensions {
  width: number;
  height: number;
}

/**
 * Returns the value of a React {@link useState}, with the {@link WindowDimensions} of the client.
 *
 * thx giovannipds <3 - https://stackoverflow.com/a/59185109
 *
 * @returns {WindowDimensions} the window dimensions
 */
export default function useWindowDimensions(): WindowDimensions | null {
  const getWindowDimensions = useCallback(() => {
    if (typeof window == "undefined") return null;
    return <WindowDimensions>{
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }, []);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [getWindowDimensions]);

  return windowDimensions;
}
