import TOCList from "./components/TOCList";
import Cursor from "./components/cursor/cursor";
import GithubIcon from "./components/icon/githubIcon";
import LinkedInIcon from "./components/icon/linkedinIcon";
import About from "./components/sections/about";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";

import { TOCListProvider } from "./context/TOCListContext";

export default function Home() {
  return (
    <>
      {/* <Cursor /> */}
      <main className="mx-auto grid min-h-screen max-w-screen-xl grid-cols-12 gap-8 px-6 py-12 md:px-14 md:py-24 lg:grid-cols-6 lg:gap-10 lg:px-20 lg:py-0">
        <TOCListProvider>
          <header className="lg: col-span-full flex-col lg:sticky lg:top-0 lg:col-span-3 lg:flex lg:max-h-screen lg:gap-8 lg:py-24">
            <hgroup>
              <h1 className="mb-1 text-h2 lg:text-h1">
                <a href="/">hey, I'm luke</a>
              </h1>
              <h3 className="text-h3 font-light text-accent-4">
                Frontend Developer
              </h3>
              <p className="mt-4 text-body text-accent-4 lg:max-w-sm">
                Empathetic, detail-oriented frontend developer passionate about
                delivering user-friendly products with engineering excellence.
              </p>
              <div className="mt-4 flex gap-4 lg:hidden">
                <GithubIcon />
                <LinkedInIcon />
              </div>
            </hgroup>
            <aside className="lg:h hidden lg:mt-14 lg:flex lg:flex-grow lg:flex-col lg:justify-between">
              <TOCList />
              <div className="flex gap-4">
                <GithubIcon className="h-8 w-8" />
                <LinkedInIcon className="h-8 w-8" />
              </div>
            </aside>
          </header>
          <main className="col-span-full mt-16 lg:col-span-3 lg:m-0 lg:py-24">
            <About />
            <Experience />
            <Projects />
          </main>
        </TOCListProvider>
      </main>
    </>
  );
}
