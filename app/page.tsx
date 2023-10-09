"use client";

import TableOfContents from "./components/tableofcontents";
import About from "./components/sections/about";
import Experience from "./components/sections/experience";

export default function Home() {
  return (
    <main className="mx-auto grid min-h-screen max-w-screen-lg grid-cols-12 gap-8 px-6 py-12 lg:px-20 lg:py-0">
      <header className="col-span-full lg:sticky lg:top-0 lg:col-span-6 lg:max-h-screen lg:gap-8 lg:py-24">
        <hgroup>
          <h1 className="text-h2 sm:text-h1">
            <a href="/">Taek B. Nam</a>
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
        <Experience />
      </main>
    </main>
  );
}
