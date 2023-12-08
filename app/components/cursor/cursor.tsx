"use client";

import { motion } from "framer-motion";
import useMousePosition from "@/app/hooks/useMousePosition";

function Cursor() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="pointer-events-none fixed z-50 h-8 w-8 -translate-x-10 -translate-y-10 rounded-full bg-teal-400 mix-blend-exclusion will-change-transform"
      animate={{
        x: x - 32 / 2,
        y: y - 32 / 2,
      }}
    ></motion.div>
  );
}

export default Cursor;
