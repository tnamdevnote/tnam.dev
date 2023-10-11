import useCursorCoordinates from "@/app/hooks/useCursorCoordinates";
import React from "react";

function Cursor() {
  const { x, y } = useCursorCoordinates();

  return (
    <div
      className={`pointer-events-none fixed z-20 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-white mix-blend-exclusion`}
      style={{
        top: y,
        left: x,
      }}
    ></div>
  );
}

export default Cursor;
