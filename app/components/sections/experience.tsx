import { useTOCListContext } from "@/app/context/TOCListContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import React, { useEffect, useRef } from "react";
import Card from "../card/card";

function Experience() {
  const expRef = useRef(null);
  const isIntersecting = useIntersectionObserver(expRef);
  const { setActivePath } = useTOCListContext();

  useEffect(() => {
    if (isIntersecting) {
      setActivePath("#experience");
    }
  }, [isIntersecting]);

  return (
    <section id="experience" className="scroll-mt-24" ref={expRef}>
      <h3 className="text-body-bold lg:hidden">EXPERIENCE</h3>
      <h3 className="mt-2 text-body">Eidex</h3>
      <p className="w-full text-small text-accent-4">
        Full-time · NOV 2016 — AUG 2023
      </p>
      <ol>
        <li className="mt-8">
          <Card>
            <Card.Header title="UI Engineer" subheader="MAR, 2022 — AUG,2023" />
            <Card.Content>
              <p className="text-small">
                Phasellus non ligula ut erat bibendum mollis. Aliquam accumsan
                mollis nulla eu sagittis. Quisque nec eros eget lectus fermentum
                vehicula. Donec odio leo, tristique sit amet fringilla a,
              </p>
              <ul>
                <li className="text-small">React</li>
                <li className="text-small">TypeScript</li>
                <li className="text-small">styled-component</li>
                <li className="text-small">framer-motion</li>
                <li className="text-small">MUI</li>
                <li className="text-small">Figma</li>
                <li className="text-small">react-hook-form</li>
              </ul>
            </Card.Content>
          </Card>
        </li>
        <li className="mt-8">
          <Card>
            <Card.Header
              title="Junior UI Engineer"
              subheader="NOV, 2019 — MAR, 2022"
            />
            <Card.Content>
              <p className="text-small">
                Phasellus non ligula ut erat bibendum mollis. Aliquam accumsan
                mollis nulla eu sagittis. Quisque nec eros eget lectus fermentum
                vehicula. Donec odio leo, tristique sit amet fringilla a,
              </p>
              <ul>
                <li className="text-small">React</li>
                <li className="text-small">TypeScript</li>
                <li className="text-small">styled-component</li>
                <li className="text-small">framer-motion</li>
                <li className="text-small">MUI</li>
                <li className="text-small">Figma</li>
                <li className="text-small">react-hook-form</li>
              </ul>
            </Card.Content>
          </Card>
        </li>
      </ol>
    </section>
  );
}

export default Experience;
