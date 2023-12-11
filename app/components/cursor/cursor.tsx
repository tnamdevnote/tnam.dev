"use client";

import { motion } from "framer-motion";
import useMousePosition from "@/app/hooks/useMousePosition";
import { useEffect, useRef } from "react";

function Cursor() {
  const { x, y } = useMousePosition();
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
    <motion.div
      className="pointer-events-none fixed z-50 hidden h-4 w-4 -translate-x-10 -translate-y-10 rounded-full bg-teal-400 mix-blend-exclusion will-change-transform md:block"
      animate={{
        x: x - 16 / 2,
        y: y - 16 / 2,
      }}
    ></motion.div>
  );
}

export default Cursor;

// const isTouchDevice =
//   "ontouchstart" in window ||
//   navigator.maxTouchPoints > 0 ||
//   navigator.maxTouchPoints > 0;

// Hide custom cursor on touch device
// if (isTouchDevice) {
//   console.log("This is a touch-enabled device (likely a mobile device)");
// } else {
//   console.log(
//     "This is not a touch-enabled device (likely not a mobile device)",
//   );
// }

// return (
//   <div
//     className="pointer-events-none fixed z-50 h-4 w-4 -translate-x-10 -translate-y-10 rounded-full bg-teal-400 mix-blend-exclusion will-change-transform"
//     ref={cursorRef}
//   ></div>
// );
