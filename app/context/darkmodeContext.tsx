"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface DarkModeContextInterface {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextInterface | undefined>(
  undefined,
);

// Dark mode Provider
export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // toggle component state and as well as toggle class="dark" in html
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    updateDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  const providerValue = useMemo(
    () => ({
      isDarkMode,
      toggleDarkMode,
    }),
    [isDarkMode, toggleDarkMode],
  );

  return (
    <DarkModeContext.Provider value={providerValue}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

// Custom hook to toggle dark mode.
export function useDarkModeContext() {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error("The context must be used inside the App component");
  }

  return context;
}

export default { DarkModeProvider, useDarkModeContext };
