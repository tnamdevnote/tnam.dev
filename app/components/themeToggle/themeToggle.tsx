"use client";

import React from "react";
import Icon from "../icon/icon";
import { Action, useDarkModeContext } from "@/app/context/darkmodeContext";

function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  const handleClick = (actionType: Action["type"]) => {
    toggleDarkMode();
  };

  return (
    <button
      className="dark:text-dark-accent-8 cursor-pointer text-accent-8"
      onClick={() => handleClick("DARK_THEME")}
    >
      <Icon name={isDarkMode ? "Sun" : "Moon"} />
    </button>
  );
}

export default ThemeToggle;
