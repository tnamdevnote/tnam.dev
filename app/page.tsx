"use client";

import TOCList from "./components/TOCList";
import About from "./components/sections/about";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";

import { TOCListProvider } from "./context/TOCListContext";

export default function Home() {
  return (
    <main className="mx-auto grid min-h-screen max-w-screen-xl grid-cols-12 gap-8 px-6 py-12 md:px-14 md:py-24 lg:grid-cols-6 lg:gap-10 lg:px-20 lg:py-0">
      <TOCListProvider>
        <header className="col-span-full lg:sticky lg:top-0 lg:col-span-3 lg:max-h-screen lg:gap-8 lg:py-24">
          <hgroup>
            <h1 className="mb-1 text-h2 lg:text-h1">
              <a href="/">hey, I'm taek</a>
              <span className="ml-2 text-body font-medium text-accent-4 md:text-subtitle md:font-medium">
                {"(tɛ́k)"}
              </span>
            </h1>
            <h3 className="text-h3 font-light text-accent-4">
              Frontend Developer
            </h3>
            <p className="mt-4 text-body text-accent-4 lg:max-w-sm">
              I enjoy creating polished user interfaces, but also deeply care
              about crafting products that enhance user experience.
            </p>
          </hgroup>
          <aside className="hidden lg:mt-14 lg:block">
            <TOCList />
          </aside>
        </header>
        <main className="col-span-full mt-16 lg:col-span-3 lg:m-0 lg:py-24">
          <About />
          <Experience />
          <Projects />
        </main>
      </TOCListProvider>
    </main>
  );
}
