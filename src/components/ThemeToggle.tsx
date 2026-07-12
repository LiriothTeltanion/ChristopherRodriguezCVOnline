import { Moon, Sun } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function ThemeToggle() {
  const { theme, toggleTheme, t } = useApp();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t.themeToggle.switchToLight : t.themeToggle.switchToDark}
      aria-pressed={isDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
    </button>
  );
}
