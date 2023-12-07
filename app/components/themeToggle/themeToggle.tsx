"use client";

import React from "react";
import Icon from "../icon/icon";
import { useDarkModeContext } from "@/app/context/darkmodeContext";

function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <button
      aria-label={`Change to ${isDarkMode ? "light" : "dark"} mode`}
      title={`Change to ${isDarkMode ? "light" : "dark"} mode`}
      type="button"
      className="dark:text-dark-accent-8 cursor-pointer text-accent-8"
      onClick={() => toggleDarkMode}
    >
      <Icon name={isDarkMode ? "Sun" : "Moon"} />
    </button>
  );
}

export default ThemeToggle;
