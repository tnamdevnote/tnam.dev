"use client";

import React, { useEffect, useRef } from "react";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleCursorMovement = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const cursor = cursorRef.current;
    if (cursor) {
      const mouseX = clientX - cursor.clientWidth / 2;
      const mouseY = clientY - cursor.clientHeight / 2;
      cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => handleCursorMovement(e));

    return () =>
      document.removeEventListener("mousemove", (e) => handleCursorMovement(e));
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-50 h-6 w-6 -translate-x-10 -translate-y-10 rounded-full bg-[#224290] mix-blend-exclusion"
      ref={cursorRef}
    ></div>
  );
}

export default Cursor;
