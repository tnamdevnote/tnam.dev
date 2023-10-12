"use client";

import React, { useEffect, useRef } from "react";

function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  const handleCursorMovement = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const cursor = cursorRef.current;
    if (cursor) {
      console.log(
        clientX,
        cursor.clientWidth,
        clientX - cursor.clientWidth / 2,
      );
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
  return <div className="cursor bg-primary-cyan-100" ref={cursorRef}></div>;
}

export default Cursor;
