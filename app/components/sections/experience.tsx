import { useTOCListContext } from "@/app/context/TOCListContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import React, { useEffect, useRef } from "react";
import Card from "../card/card";
import { EXPERIENCE } from "@/config";
import Chip from "../chip/chip";
import Link from "next/link";

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
      <h3 className="mt-2 text-body text-accent-7">Eidex, LLC</h3>
      <p className="w-full text-small text-accent-4">
        Full-time · NOV 2016 — AUG 2023
      </p>
      <ol>
        {EXPERIENCE.map((exp) => (
          <li className="mt-8">
            <Card>
              <Card.Header title={exp.title} subheader={exp.date} />
              <Card.Content>
                <p className="text-small text-accent-5">{exp.description}</p>
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label="Technology used"
                >
                  {exp.techStack.map((ts) => (
                    <li>
                      <Chip label={ts} />
                    </li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          </li>
        ))}
      </ol>
      <a href="/resume.pdf" target="_blank" className="mt-10 inline-block">
        <span className="border-b border-transparent px-1 pb-px text-body text-accent-7 transition hover:border-b-primary-cyan-100">
          Click to see full resume!
        </span>
      </a>
    </section>
  );
}

export default Experience;
