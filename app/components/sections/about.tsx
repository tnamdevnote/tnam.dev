"use client";

import { useTOCListContext } from "@/app/context/TOCListContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import React, { useEffect, useRef } from "react";

function About() {
  const aboutRef = useRef(null);
  const isIntersecting = useIntersectionObserver(aboutRef);
  const { setActivePath } = useTOCListContext();

  useEffect(() => {
    if (isIntersecting) {
      setActivePath("#about");
    }
  }, [isIntersecting]);

  return (
    <section id="about" className="mb-36 scroll-mt-24" ref={aboutRef}>
      <h3 className="dark:text-dark-accent-8 mb-4 text-body-bold text-accent-8 lg:hidden">
        ABOUT
      </h3>
      <article className="dark:text-dark-accent-6 text-body text-accent-4">
        Phasellus non ligula ut erat bibendum mollis. Aliquam accumsan mollis
        nulla eu sagittis. Quisque nec eros eget lectus fermentum vehicula.
        Donec odio leo, tristique sit amet fringilla a, pellentesque eu nibh. In
        dapibus ex ut leo molestie, quis rhoncus turpis vulputate. Vestibulum
        vitae condimentum nibh, at semper ipsum. Praesent accumsan nisl in
        tempor tincidunt. Fusce id viverra mi, eget faucibus. pellentesque eu
        nibh. In dapibus ex ut leo molestie, quis rhoncus turpis vulputate.
        Vestibulum vitae condimentum nibh, at semper ipsum. Praesent accumsan
        nisl in tempor tincidunt. Fusce id viverra mi, eget faucibus.
      </article>
    </section>
  );
}

export default About;
