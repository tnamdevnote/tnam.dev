import Image from "next/image";
import TOCList from "./components/TOCList";
import About from "./components/sections/about";
import Experience from "./components/sections/experience";
import Projects from "./components/sections/projects";

import { TOCListProvider } from "./context/TOCListContext";
import { CONTACTS } from "@/config";
import Icon from "./components/icon/icon";

export default function Home() {
  return (
    <>
      {/* <Cursor /> */}
      <main className="mx-auto grid min-h-screen max-w-screen-xl grid-cols-12 gap-8 px-6 py-24 md:px-14 md:py-32 lg:grid-cols-6 lg:gap-10 lg:px-20 lg:py-0">
        <TOCListProvider>
          <header className="lg: col-span-full flex-col lg:sticky lg:top-0 lg:col-span-3 lg:flex lg:max-h-screen lg:gap-8 lg:pb-24 lg:pt-44">
            <hgroup>
              <div
                className="mb-4 w-fit rounded-full shadow-lg"
                aria-label="profile photo"
              >
                <Image
                  src="/profile-1.png"
                  width="61"
                  height="63"
                  style={{ width: "auto", height: "auto" }}
                  alt="profile photo"
                />
              </div>
              <h1 className="mb-1 text-h2 lg:text-h2">
                <a href="/">
                  hey, I'm Taek
                  <span className="ml-2 text-lg font-normal text-accent-4">
                    {"(tɛ́k)"}
                  </span>
                </a>
              </h1>
              <h3 className="text-h3 font-light text-accent-4">
                Frontend Developer
              </h3>
              <p className="mt-4 text-body text-accent-4 lg:max-w-sm">
                A thoughtful problem solver. Enjoys designing and building for
                web.
              </p>
              <div className="mt-4 flex gap-4 lg:hidden">
                {CONTACTS.map((contact) => (
                  <a
                    key={contact.name}
                    href={contact.url}
                    aria-label={contact.name}
                    target="_blank"
                    className="group rounded-lg text-accent-4 transition-all group-hover:text-accent-8"
                  >
                    <Icon
                      name={contact.name}
                      className="transition-transform group-hover:scale-[1.1]"
                    />
                  </a>
                ))}
              </div>
            </hgroup>
            <aside className="lg:h hidden lg:mt-14 lg:flex lg:flex-grow lg:flex-col lg:justify-between">
              <TOCList />
              <div className="flex gap-4">
                {CONTACTS.map((contact) => (
                  <a
                    key={contact.name}
                    href={contact.url}
                    aria-label={contact.name}
                    target="_blank"
                    className="group rounded-lg text-accent-5 transition-all group-hover:text-accent-8"
                  >
                    <Icon
                      name={contact.name}
                      className="h-6 w-6 font-bold transition-transform group-hover:scale-[1.1]"
                    />
                  </a>
                ))}
              </div>
            </aside>
          </header>
          <main className="col-span-full mt-16 lg:col-span-3 lg:m-0 lg:pb-24 lg:pt-44">
            <About />
            <Experience />
            <Projects />
          </main>
        </TOCListProvider>
      </main>
    </>
  );
}
