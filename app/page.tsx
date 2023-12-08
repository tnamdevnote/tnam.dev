import Image from "next/image";
import TOCList from "./components/TOCList";
import About from "./components/sections/about";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";

import { TOCListProvider } from "./context/TOCListContext";
import { CONTACTS } from "@/config";
import Icon from "./components/icon/icon";
import ThemeToggle from "./components/themeToggle/themeToggle";
import Cursor from "./components/cursor/cursor";

export default function Home() {
  return (
    <>
      <Cursor />
      <div className="flex w-full">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-screen-xl">
            <div className="w-full bg-background ring-1 ring-accent-2 dark:bg-dark-accent-2/40 dark:ring-dark-accent-2"></div>
          </div>
        </div>
        <div className="relative flex w-full flex-col">
          <nav className="flex w-full max-w-screen-xl justify-end px-6 pt-12 sm:px-16 md:mx-auto md:px-24 lg:px-24">
            <ThemeToggle />
          </nav>
          <section className="mx-auto grid min-h-screen max-w-screen-xl grid-cols-6 gap-8 px-6 py-16 sm:px-16 md:grid-cols-12 md:px-24 md:py-20 lg:grid-cols-6 lg:gap-10 lg:px-24 lg:py-0">
            <TOCListProvider>
              <header className="col-span-full flex-col lg:fixed lg:col-span-3 lg:flex lg:min-h-screen lg:gap-8 lg:pb-32 lg:pt-24">
                <hgroup>
                  <div
                    className="mb-4 w-fit rounded-full shadow-lg"
                    aria-label="profile photo"
                  >
                    <Image
                      src="/profile-1.png"
                      width="61"
                      height="63"
                      style={{ width: "61", height: "63" }} // matching this with the image dimension resolves Layout Shift.
                      alt="profile photo"
                    />
                  </div>
                  <h1 className="mb-1 text-h2 text-accent-8 dark:text-dark-accent-8 lg:text-h2">
                    <a href="/">
                      hey, I'm Taek
                      <span className="ml-2 text-lg font-normal text-accent-4 dark:text-dark-accent-4">
                        (tɛ́k)
                      </span>
                    </a>
                  </h1>
                  <h3 className="text-h3 font-light text-accent-4 dark:text-dark-accent-6">
                    Frontend Developer
                  </h3>
                  <p className="mt-4 text-body text-accent-4 dark:text-dark-accent-7 lg:max-w-sm">
                    A thoughtful problem solver. Enjoys designing and building
                    for web.
                  </p>
                  <div className="mt-4 flex gap-4 lg:hidden">
                    {CONTACTS.map((contact) => (
                      <a
                        key={contact.name}
                        href={contact.url}
                        aria-label={contact.name}
                        target="_blank"
                        className="rounded-lg text-accent-4 transition-all dark:text-dark-accent-7"
                      >
                        <Icon
                          name={contact.name}
                          className="stroke-[1px] transition-colors hover:text-teal-600 dark:hover:text-teal-400"
                        />
                      </a>
                    ))}
                  </div>
                </hgroup>
                <aside className="hidden lg:mt-14 lg:flex lg:flex-grow lg:flex-col lg:justify-between">
                  <TOCList />
                  <div className="flex gap-4">
                    {CONTACTS.map((contact) => (
                      <a
                        key={contact.name}
                        href={contact.url}
                        aria-label={contact.name}
                        target="_blank"
                        className="rounded-lg text-accent-8 transition-all dark:text-dark-accent-8"
                      >
                        <Icon
                          name={contact.name}
                          className="h-6 w-6 stroke-[1px] font-bold transition-colors hover:text-teal-600 dark:hover:text-teal-400"
                        />
                      </a>
                    ))}
                  </div>
                </aside>
              </header>
              <section className="col-span-full mt-16 lg:col-span-3 lg:col-start-4 lg:m-0 lg:py-24">
                <About />
                <Experience />
                <Projects />
              </section>
            </TOCListProvider>
          </section>
        </div>
      </div>
    </>
  );
}
