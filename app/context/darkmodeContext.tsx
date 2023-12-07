"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

export type State = { mode: string; isDarkMode: boolean };
export type Action =
  | { type: "LIGHT_THEME" }
  | { type: "DARK_THEME" }
  | { type: "USER_DEVICE" };
export type Dispatch = (action: Action) => void;

interface DarkModeContextInterface {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextInterface | undefined>(
  undefined,
);

// Dark mode Provider
export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMod] = useState(false);

  // toggle component state and as well as toggle class="dark" in html
  const toggleDarkMode = () => {
    setIsDarkMod((prev) => !prev);
    updateDarkMode(!isDarkMode);
  };

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
  } else {
    document.documentElement.classList.remove("dark");
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
