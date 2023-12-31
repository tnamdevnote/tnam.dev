"use client";

import { useTOCListContext } from "@/app/context/TOCListContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import React, { useEffect, useRef } from "react";
import Card from "../card/card";
import { PROJECTS } from "@/config";
import Chip from "../chip/chip";
import ArrowIcon from "../icon/arrowIcon";
import Image from "next/image";

function Projects() {
  const projectsRef = useRef(null);
  const isIntersecting = useIntersectionObserver(projectsRef);
  const { setActivePath } = useTOCListContext();

  useEffect(() => {
    if (isIntersecting) {
      setActivePath("#projects");
    }
  }, [isIntersecting]);

  return (
    <section id="projects" className="scroll-mt-24" ref={projectsRef}>
      <h3 className="mb-4 text-body-bold text-accent-8 dark:text-dark-accent-8 lg:hidden">
        PROJECTS
      </h3>
      <ol className="group/list">
        {PROJECTS.map((project) => (
          <li
            key={project.name}
            className="relative mb-8 flex flex-row transition hover:!opacity-100 group-hover/list:opacity-50"
          >
            <div className="group grid gap-4 rounded-xl bg-accent-2/40 p-6 transition-all hover:bg-accent-2/50 dark:bg-dark-accent-8/10 sm:grid-cols-8 lg:py-4">
              {/* <div className="absolute -inset-x-6 -inset-y-2 z-10 h-[110%] w-[110%] rounded-xl transition-all group-hover:bg-accent-1 lg:block"></div> */}
              <Image
                src={project.imgUrl}
                alt={project.name}
                className="z-20 order-2 self-start object-scale-down sm:order-1 sm:col-span-2"
                width="150"
                height="40"
              />
              <div className="z-20 order-1 sm:order-2 sm:col-span-6">
                <Card>
                  <Card.Header
                    title={
                      <a
                        href={project.url}
                        target="_blank"
                        className="flex items-center gap-2 transition-all"
                      >
                        <span className="absolute -inset-x-6 -inset-y-2 hidden h-[110%] w-[110%] lg:block"></span>
                        {project.name}
                        <ArrowIcon className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </a>
                    }
                  />
                  <Card.Content>
                    <p className="text-small text-accent-5 dark:text-dark-accent-6">
                      {project.description}
                    </p>
                    <ul
                      className="mt-4 flex flex-wrap gap-2"
                      aria-label="Technology used"
                    >
                      {project.techStack.map((ts) => (
                        <li key={ts}>
                          <Chip label={ts} />
                        </li>
                      ))}
                    </ul>
                  </Card.Content>
                </Card>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Projects;
