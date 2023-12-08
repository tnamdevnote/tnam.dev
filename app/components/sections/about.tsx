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
    <section id="about" className="mb-36 scroll-mt-44" ref={aboutRef}>
      <h3 className="mb-4 text-body-bold text-accent-8 dark:text-dark-accent-8 lg:hidden">
        ABOUT
      </h3>
      <article className="text-body text-accent-6 dark:text-dark-accent-7">
        <b className="text-teal-600 dark:text-teal-500">Art</b> and&nbsp;
        <b className="text-teal-600 dark:text-teal-500">craft</b> have always
        been my passion. I’m fascinated by visually pleasing and user-friendly
        designs, and equally, I enjoy delving into the technical aspects and all
        the nitty-gritty details.
        <br />
        <br />
        These two seemingly disparate interests came together when I first wrote
        a few lines of CSS and JavaScript at work to update a simple button UI.
        This was the "aha!" moment that led me into a career in&nbsp;
        <b className="text-teal-600 dark:text-teal-500">
          front-end development.
        </b>
        &nbsp; I attended Springboard coding academy where I spent 8 months
        learning the fundamentals of front-end and back-end development while
        working full-time.
        <br />
        <br />
        In my recent year at Eidex, I was involved in a project to upgrade one
        of the company's flagship products (PRISM 2.0), where I&nbsp;
        <b className="text-teal-600 dark:text-teal-500">designed</b> and&nbsp;
        <b className="text-teal-600 dark:text-teal-500">
          implemented UI features and components
        </b>
        . Through these experiences, I had the opportunity to not only enhance
        my front-end development skills but also develop a working style that
        leans towards
        <b className="text-teal-600 dark:text-teal-500"> learning</b>,&nbsp;
        <b className="text-teal-600 dark:text-teal-500">attention to detail</b>,
        and <b className="text-teal-600 dark:text-teal-500">collaboration</b>.
      </article>
    </section>
  );
}

export default About;
