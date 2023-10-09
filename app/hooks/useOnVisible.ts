"use client";

import React, { useEffect, useState } from "react";

export default function useOnVisible(ref: React.RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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

  return isVisible;
}
