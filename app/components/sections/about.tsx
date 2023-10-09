import useNav from "@/app/hooks/useNav";
import useOnVisible from "@/app/hooks/useOnVisible";
import React, { useEffect, useRef } from "react";

type AboutProps = {
  onActive: (activeId: string) => void;
};

function About({ onActive: handleActive }: AboutProps) {
  // const aboutRef = useNav();
  const aboutRef = useRef(null);
  const isVisible = useOnVisible(aboutRef);

  useEffect(() => {
    if (isVisible) {
      handleActive("#about");
    }
  }, [isVisible]);

  return (
    <section id="about" className="mb-36 scroll-mt-24" ref={aboutRef}>
      <h3 className="mb-8 text-body-bold lg:hidden">ABOUT</h3>
      <article className="text-body text-accent-4">
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
