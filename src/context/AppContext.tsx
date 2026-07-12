import { createContext, useContext, type ReactNode } from "react";
import { useLanguage } from "../hooks/useLanguage";
import { useTheme } from "../hooks/useTheme";
import { useColorTheme } from "../hooks/useColorTheme";

type AppContextValue = ReturnType<typeof useLanguage> &
  ReturnType<typeof useTheme> &
  ReturnType<typeof useColorTheme>;

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const language = useLanguage();
  const theme = useTheme();
  const colorTheme = useColorTheme();

  return (
    <AppContext.Provider value={{ ...language, ...theme, ...colorTheme }}>
      {children}
    </AppContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- context hook lives alongside its provider by design
export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return ctx;
}
