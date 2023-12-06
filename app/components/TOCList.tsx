"use client";

import React, { useEffect } from "react";
import { TOC_LIST } from "@/config";
import { useTOCListContext } from "../context/TOCListContext";

function TOCList() {
  const { activePath, setActivePath } = useTOCListContext();

  useEffect(() => {
    const handleHashChange = () => {
      setActivePath(location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <ul className="flex flex-col gap-4">
      {TOC_LIST.map(({ name, path }) => {
        return (
          <li key={name} className="flex">
            <a
              href={path}
              className={`group flex items-center ${
                activePath === path ? "active" : ""
              }`}
            >
              <span className="toc-indicator mr-4 h-px w-8 bg-accent-3 transition-all group-hover:w-16 group-hover:bg-accent-8 group-focus-visible:w-16 group-focus-visible:bg-accent-8"></span>
              <span className="toc-text group-focus-visible:text-primary-cyan text-small text-accent-3 group-hover:text-accent-8">
                {name}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default TOCList;
