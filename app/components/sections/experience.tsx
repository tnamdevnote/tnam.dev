"use client";

import { useTOCListContext } from "@/app/context/TOCListContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import React, { useEffect, useRef } from "react";
import Card from "../card/card";
import { EXPERIENCE } from "@/config";
import Chip from "../chip/chip";
import ArrowIcon from "../icon/arrowIcon";

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
    <section id="experience" className="mb-24 scroll-mt-24" ref={expRef}>
      <h3 className="dark:text-dark-accent-8 mb-4 text-body-bold text-accent-8 lg:hidden">
        EXPERIENCE
      </h3>
      <h3 className="dark:text-dark-accent-7 text-body font-semibold text-accent-7">
        Eidex, LLC
      </h3>
      <p className="dark:text-dark-accent-6 mb-3 w-full text-small text-accent-4">
        Full-time · NOV 2016 — AUG 2023
      </p>
      <ol className="group/list">
        {EXPERIENCE.map((exp) => (
          <li
            key={exp.title}
            className="lg:stepper relative mb-8 lg:transition lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <span className="lg:stepper__bullet relative"></span>
            <Card>
              <Card.Header title={exp.title} subheader={exp.date} />
              <Card.Content>
                <p className="dark:text-dark-accent-6 text-small text-accent-5">
                  {exp.description}
                </p>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technology used"
                >
                  {exp.techStack.map((ts) => (
                    <li key={ts}>
                      <Chip label={ts} />
                    </li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          </li>
        ))}
      </ol>
      <a href="/resume.pdf" target="_blank" className="group inline-block">
        <span className="dark:text-dark-accent-7 dark:group-hover:border-b-dark-accent-8 flex items-center gap-2 border-b border-transparent px-1 pb-px text-body text-accent-7 transition group-hover:border-b-accent-8">
          Click to see full resume!
          <ArrowIcon className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </span>
      </a>
    </section>
  );
}

export default Experience;
