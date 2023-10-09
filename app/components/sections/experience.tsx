import { useTOCListContext } from "@/app/context/TOCListContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import React, { useEffect, useRef } from "react";

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
      <ol>
        <li className="mt-8">
          <header className="text-xs text-accent-4">
            MAR, 2022 — AUG,2023
          </header>
          <div className="mt-2">
            <h3 className="mb-2 text-body">UI Engineer</h3>
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
          </div>
        </li>
        <li className="mt-8">
          <header className="text-xs text-accent-4">
            NOV, 2019 — MAR, 2022
          </header>
          <div className="mt-2">
            <h3 className="mb-2 text-body">Junior UI Engineer</h3>
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
          </div>
        </li>
        <li className="mt-8">
          <header className="text-xs text-accent-4">
            JUL, 2018 — NOV, 2019
          </header>
          <div className="mt-2">
            <h3 className="mb-2 text-body">Data Warehouse Engineer</h3>
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
          </div>
        </li>
        <li className="mt-8">
          <header className="text-xs text-accent-4">
            NOV, 2016 — JUL, 2018
          </header>
          <div className="mt-2">
            <h3 className="mb-2 text-body">QA Analyst</h3>
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
          </div>
        </li>
      </ol>
    </section>
  );
}

export default Experience;
