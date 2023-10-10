import { useTOCListContext } from "@/app/context/TOCListContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import React, { useEffect, useRef } from "react";
import Card from "../card/card";
import { EXPERIENCE } from "@/config";
import Chip from "../chip/chip";

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
      <h3 className="mt-2 text-body">Eidex, LLC</h3>
      <p className="w-full text-small text-accent-4">
        Full-time · NOV 2016 — AUG 2023
      </p>
      <ol>
        {EXPERIENCE.map((exp) => (
          <li className="mt-8">
            <Card>
              <Card.Header title={exp.title} subheader={exp.date} />
              <Card.Content>
                <p className="text-small text-accent-6">{exp.description}</p>
              </Card.Content>
              <Chip label="Chip" />
            </Card>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
