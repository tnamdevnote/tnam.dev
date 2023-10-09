"use client";

import { createContext, useContext, useMemo, useState } from "react";

type TOCListContext = {
  activePath: string;
  setActivePath: (currentPath: string) => void;
};

type TOCListProvider = { children: React.ReactNode };

const TOCListContext = createContext<TOCListContext | undefined>(undefined);

function TOCListProvider({ children }: TOCListProvider) {
  const [activePath, setActivePath] = useState("");

  const memoizedProviderValue = useMemo(
    () => ({
      activePath,
      setActivePath,
    }),
    [activePath, setActivePath],
  );

  return (
    <TOCListContext.Provider value={memoizedProviderValue}>
      {children}
    </TOCListContext.Provider>
  );
}

function useTOCListContext() {
  const context = useContext(TOCListContext);
  if (!context) {
    throw new Error("useTOCList must be used within a TOCListProvider");
  }

  return context;
}

export { TOCListProvider, useTOCListContext };
