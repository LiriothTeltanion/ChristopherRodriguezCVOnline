import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

/**
 * lucide-react dropped brand/logo glyphs, so these marks are inlined here
 * to keep the same icon-component API used across the app.
 */
export function YoutubeIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.87.55 9.38.55 9.38.55s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.5V8.5l6.3 3.5-6.3 3.5Z" />
    </svg>
  );
}

export function TiktokIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.6 0h-3.3v16.1c0 1.7-1.36 3.1-3.05 3.1a3.08 3.08 0 0 1-3.05-3.1c0-1.7 1.36-3.09 3.05-3.09.34 0 .66.05.96.15v-3.36a6.4 6.4 0 0 0-.96-.07A6.42 6.42 0 0 0 4 16.1 6.42 6.42 0 0 0 10.25 22.6a6.42 6.42 0 0 0 6.35-6.5V8.03a8.16 8.16 0 0 0 4.9 1.63V6.3a4.85 4.85 0 0 1-4.9-4.86V0Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
