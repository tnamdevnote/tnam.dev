"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import TableOfContents from "./components/tableofcontents";

import About from "./components/sections/about";
import Experience from "./components/sections/experience";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7,
};

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const expRef = useRef<HTMLElement>(null);
  const progRef = useRef(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    if (expRef.current) observer.observe(expRef.current);

    return () => {
      if (expRef.current) observer.unobserve(expRef.current);
    };
  }, [options]);
  console.log(isVisible);

  return (
    <main className="mx-auto grid min-h-screen max-w-screen-lg grid-cols-12 gap-8 px-6 py-12 lg:px-20 lg:py-0">
      <header className="col-span-full lg:sticky lg:top-0 lg:col-span-6 lg:max-h-screen lg:gap-8 lg:py-24">
        <hgroup>
          <h1 className="text-h2 sm:text-h1">
            <Link href="/">Taek B. Nam</Link>
          </h1>
          <h3 className="text-h3 font-light">Frontend Developer</h3>
          <p className="mt-4 text-body text-accent-4">
            I enjoy creating polished user interfaces, but also deeply care
            about crafting products that enhance user experience.
          </p>
        </hgroup>
        <aside className="hidden lg:mt-14 lg:block">
          <TableOfContents />
        </aside>
      </header>
      <main className="col-span-full mt-16 lg:col-span-6 lg:m-0 lg:py-24">
        <About />
        <Experience ref={expRef} />
      </main>
    </main>
  );
}
