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
            <img
              src={project.imgUrl}
              alt={project.name}
              className="mr-4 self-start object-scale-down"
              width="150px"
              height="40px"
            />
            <Card>
              <Card.Header
                title={
                  <a href={project.url} target="_blank">
                    {project.name}
                  </a>
                }
              />
              <Card.Content>
                <p className="text-small text-accent-4">
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
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Projects;
