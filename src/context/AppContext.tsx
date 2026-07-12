import { createContext, useContext, type ReactNode } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";

type AppContextValue = ReturnType<typeof useLanguage> & ReturnType<typeof useTheme>;

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const language = useLanguage();
  const theme = useTheme();

  return <AppContext.Provider value={{ ...language, ...theme }}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components -- context hook lives alongside its provider by design
export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return ctx;
}
