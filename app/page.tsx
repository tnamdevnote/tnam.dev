"use client";

import Link from "next/link";
import TableOfContents from "./components/tableofcontents";

export default function Home() {
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
        <section id="about" className="mb-36 scroll-mt-24">
          <h3 className="mb-8 text-body-bold lg:hidden">ABOUT</h3>
          <article className="text-body text-accent-4">
            Phasellus non ligula ut erat bibendum mollis. Aliquam accumsan
            mollis nulla eu sagittis. Quisque nec eros eget lectus fermentum
            vehicula. Donec odio leo, tristique sit amet fringilla a,
            pellentesque eu nibh. In dapibus ex ut leo molestie, quis rhoncus
            turpis vulputate. Vestibulum vitae condimentum nibh, at semper
            ipsum. Praesent accumsan nisl in tempor tincidunt. Fusce id viverra
            mi, eget faucibus. pellentesque eu nibh. In dapibus ex ut leo
            molestie, quis rhoncus turpis vulputate. Vestibulum vitae
            condimentum nibh, at semper ipsum. Praesent accumsan nisl in tempor
            tincidunt. Fusce id viverra mi, eget faucibus.
          </article>
        </section>
        <section id="experience" className="scroll-mt-24">
          <h3 className="text-body-bold lg:hidden">EXPERIENCE</h3>
          <ol>
            <li className="mt-8">
              <header className="text-xs text-accent-4">
                MAR, 2022 — AUG,2023
              </header>
              <div className="mt-2">
                <h3 className="mb-2 text-body">UI Engineer</h3>
                <p className="text-small">
                  Phasellus non ligula ut erat bibendum mollis. Aliquam accumsan
                  mollis nulla eu sagittis. Quisque nec eros eget lectus
                  fermentum vehicula. Donec odio leo, tristique sit amet
                  fringilla a,
                </p>
                <ul>
                  <li className="text-small">React</li>
                  <li className="text-small">TypeScript</li>
                  <li className="text-small">styled-component</li>
                  <li className="text-small">framer-motion</li>
                  <li className="text-small">MUI</li>
                  <li className="text-small">Figma</li>
                  <li className="text-small">react-hook-form</li>
                </ul>
              </div>
            </li>
            <li className="mt-8">
              <header className="text-xs text-accent-4">
                NOV, 2019 — MAR, 2022
              </header>
              <div className="mt-2">
                <h3 className="mb-2 text-body">Junior UI Engineer</h3>
                <p className="text-small">
                  Phasellus non ligula ut erat bibendum mollis. Aliquam accumsan
                  mollis nulla eu sagittis. Quisque nec eros eget lectus
                  fermentum vehicula. Donec odio leo, tristique sit amet
                  fringilla a,
                </p>
                <ul>
                  <li className="text-small">React</li>
                  <li className="text-small">TypeScript</li>
                  <li className="text-small">styled-component</li>
                  <li className="text-small">framer-motion</li>
                  <li className="text-small">MUI</li>
                  <li className="text-small">Figma</li>
                  <li className="text-small">react-hook-form</li>
                </ul>
              </div>
            </li>
            <li className="mt-8">
              <header className="text-xs text-accent-4">
                JUL, 2018 — NOV, 2019
              </header>
              <div className="mt-2">
                <h3 className="mb-2 text-body">Data Warehouse Engineer</h3>
                <p className="text-small">
                  Phasellus non ligula ut erat bibendum mollis. Aliquam accumsan
                  mollis nulla eu sagittis. Quisque nec eros eget lectus
                  fermentum vehicula. Donec odio leo, tristique sit amet
                  fringilla a,
                </p>
                <ul>
                  <li className="text-small">React</li>
                  <li className="text-small">TypeScript</li>
                  <li className="text-small">styled-component</li>
                  <li className="text-small">framer-motion</li>
                  <li className="text-small">MUI</li>
                  <li className="text-small">Figma</li>
                  <li className="text-small">react-hook-form</li>
                </ul>
              </div>
            </li>
            <li className="mt-8">
              <header className="text-xs text-accent-4">
                NOV, 2016 — JUL, 2018
              </header>
              <div className="mt-2">
                <h3 className="mb-2 text-body">QA Analyst</h3>
                <p className="text-small">
                  Phasellus non ligula ut erat bibendum mollis. Aliquam accumsan
                  mollis nulla eu sagittis. Quisque nec eros eget lectus
                  fermentum vehicula. Donec odio leo, tristique sit amet
                  fringilla a,
                </p>
                <ul>
                  <li className="text-small">React</li>
                  <li className="text-small">TypeScript</li>
                  <li className="text-small">styled-component</li>
                  <li className="text-small">framer-motion</li>
                  <li className="text-small">MUI</li>
                  <li className="text-small">Figma</li>
                  <li className="text-small">react-hook-form</li>
                </ul>
              </div>
            </li>
          </ol>
        </section>
      </main>
    </main>
  );
}
