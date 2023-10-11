import { useTOCListContext } from "@/app/context/TOCListContext";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import React, { useEffect, useRef } from "react";
import Card from "../card/card";
import { PROJECTS } from "@/config";
import Chip from "../chip/chip";

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
      <h3 className="text-body-bold text-accent-7 lg:hidden">PROJECTS</h3>
      <ol className="group/list">
        {PROJECTS.map((project) => (
          <li className="relative mt-8 flex flex-row lg:transition lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="group grid gap-4 sm:grid-cols-8 lg:py-4">
              <div className="absolute -inset-x-6 -inset-y-2 -z-10 hidden h-[110%] w-[110%] rounded-xl transition-all lg:block lg:group-hover:bg-accent-1 lg:group-hover:shadow-lg"></div>
              <img
                src={project.imgUrl}
                alt={project.name}
                className="order-2 self-start object-scale-down sm:order-1 sm:col-span-2"
                width="150px"
                height="40px"
              />
              <div className="order-1 sm:order-2 sm:col-span-6">
                <Card>
                  <Card.Header
                    title={
                      <a
                        href={project.url}
                        target="_blank"
                        className="transition-all hover:text-primary-cyan-100"
                      >
                        <span className="absolute -inset-x-6 -inset-y-2 hidden h-[110%] w-[110%] lg:block"></span>
                        {project.name}
                      </a>
                    }
                  />
                  <Card.Content>
                    <p className="text-small text-accent-5">
                      {project.description}
                    </p>
                    <ul
                      className="mt-4 flex flex-wrap gap-2"
                      aria-label="Technology used"
                    >
                      {project.techStack.map((ts) => (
                        <li>
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
