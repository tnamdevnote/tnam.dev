import React, { useEffect, useState } from "react";

function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition((prev) => ({ ...prev, x: clientX, y: clientY }));
  };

  useEffect(() => {
    window.addEventListener("mousemove", (e) => updateMousePosition(e));

    return () =>
      window.removeEventListener("mousemove", (e) => updateMousePosition(e));
  }, []);

  return mousePosition;
}

export default useMousePosition;
