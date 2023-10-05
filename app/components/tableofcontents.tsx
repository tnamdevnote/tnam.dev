"use client";

import React, { useEffect, useState } from "react";
import { TOC_LIST } from "@/config";

function TableOfContents() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(location.hash);
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
          <li key={name} className="cursor-pointer">
            <a
              href={path}
              className={`group flex items-center ${
                currentPath === path ? "active" : ""
              }`}
            >
              <span className="toc-indicator mr-4 h-px w-8 bg-accent-3 transition-all group-hover:w-16 group-hover:bg-accent-6 group-focus-visible:w-16 group-focus-visible:bg-accent-6"></span>
              <span className="toc-text text-small text-accent-3 group-hover:text-accent-6 group-focus-visible:text-accent-6">
                {name}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default TableOfContents;
