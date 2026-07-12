import { Check } from "lucide-react";
import { useApp } from "../context/AppContext";
import type { ColorTheme } from "../hooks/useColorTheme";

const SWATCHES: { id: ColorTheme; hex: string }[] = [
  { id: "teal", hex: "#0f766e" },
  { id: "golden", hex: "#b45309" },
  { id: "azul", hex: "#1d4ed8" },
];

/**
 * Accent color picker (teal / golden / blue). Independent of the
 * light/dark toggle — swatches never rely on color alone to signal the
 * active choice; a check icon and aria-pressed state carry that too.
 */
export function ColorThemeSwitcher() {
  const { t, colorTheme, setColorTheme } = useApp();

  return (
    <div role="group" aria-label={t.colorThemeSwitcher.label} className="flex items-center gap-1.5">
      {SWATCHES.map((swatch) => {
        const isSelected = colorTheme === swatch.id;
        const label = t.colorThemeSwitcher[swatch.id];
        return (
          <button
            key={swatch.id}
            type="button"
            onClick={() => setColorTheme(swatch.id)}
            aria-pressed={isSelected}
            aria-label={isSelected ? `${label} (${t.colorThemeSwitcher.selected})` : label}
            title={label}
            className="relative inline-flex h-6 w-6 items-center justify-center rounded-full border-2 transition-transform hover:scale-110"
            style={{
              backgroundColor: swatch.hex,
              borderColor: isSelected ? "var(--text)" : "transparent",
            }}
          >
            {isSelected ? (
              <Check size={12} strokeWidth={3} aria-hidden="true" className="text-white" />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}
