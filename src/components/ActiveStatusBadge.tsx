type ActiveStatusBadgeProps = {
  label: string;
  className?: string;
};

/**
 * Small pulsing status indicator. The dot is decorative (aria-hidden) —
 * the accompanying label is the actual accessible status, so the badge
 * never relies on color/animation alone to convey meaning, and the pulse
 * itself is disabled under prefers-reduced-motion via .status-dot in
 * globals.css.
 */
export function ActiveStatusBadge({ label, className = "" }: ActiveStatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-muted)] px-3 py-1 text-xs font-semibold tracking-wide text-[var(--text)] ${className}`}
    >
      <span className="status-dot" aria-hidden="true" />
      {label}
    </span>
  );
}
