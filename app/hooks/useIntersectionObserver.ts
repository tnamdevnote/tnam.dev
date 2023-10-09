"use client";

import React, { useEffect, useState } from "react";

export default function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );

    ref.current && observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}
