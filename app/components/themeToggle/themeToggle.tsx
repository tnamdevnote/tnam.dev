"use client";

import React, { useEffect, useState } from "react";
import Icon from "../icon/icon";
import { useTheme } from "next-themes";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  console.log(theme);

  return (
    <button
      aria-label={`Change to ${theme ? "light" : "dark"} mode`}
      title={`Change to ${theme ? "light" : "dark"} mode`}
      type="button"
      className="cursor-pointer text-accent-8 dark:text-dark-accent-8"
      onClick={() => setTheme(theme === "light" ? "Moon" : "Sun")}
    >
      <Icon name={theme === "light" ? "Moon" : "Sun"} />
    </button>
  );
}

export default ThemeToggle;
