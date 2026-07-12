import { useCallback, useEffect, useState } from "react";

export type ColorTheme = "teal" | "golden" | "azul";

const STORAGE_KEY = "cr-color-theme";
const VALID: ColorTheme[] = ["teal", "golden", "azul"];

function detectInitialColorTheme(): ColorTheme {
  if (typeof window === "undefined") return "teal";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && VALID.includes(stored as ColorTheme)) return stored as ColorTheme;

  return "teal";
}

export function useColorTheme() {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>(() => detectInitialColorTheme());

  useEffect(() => {
    document.documentElement.setAttribute("data-color-theme", colorTheme);
    window.localStorage.setItem(STORAGE_KEY, colorTheme);
  }, [colorTheme]);

  const setColorTheme = useCallback((next: ColorTheme) => {
    setColorThemeState(next);
  }, []);

  return { colorTheme, setColorTheme };
}
