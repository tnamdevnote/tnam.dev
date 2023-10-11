import { useEffect, useState } from "react";

export default function useCursorCoordinates() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setCoordinates((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
    });

    return () =>
      document.removeEventListener("mousemove", () => console.log("removed"));
  }, []);

  return { ...coordinates };
}
