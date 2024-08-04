import { useEffect, useState, RefObject } from "react";

type ElementPosition = {
  center: { x: number; y: number };
  width: number;
  height: number;
};

const useBoundingClientRect = (elementRef: RefObject<HTMLDivElement>) => {
  const [elementPosition, setElementPosition] =
    useState<ElementPosition | null>();

  useEffect(() => {
    if (elementRef.current) {
      const boundingRect = elementRef.current.getBoundingClientRect();

      setElementPosition({
        center: {
          x: boundingRect.x + boundingRect.width / 2,
          y: boundingRect.y + boundingRect.height / 2,
        },
        width: boundingRect.width,
        height: boundingRect.height,
      });
    }
  }, [elementRef]);

  return elementPosition;
};

export default useBoundingClientRect;
