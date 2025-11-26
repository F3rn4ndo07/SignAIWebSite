import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 30"
      width="120"
      height="30"
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g className="font-sans">
        <text
          x="32"
          y="22"
          className="font-extrabold text-2xl"
          fill="url(#grad1)"
        >
          SignAI
        </text>
      </g>
      <path
        d="M 5 15 C 5 10, 10 5, 15 5 C 20 5, 25 10, 25 15 C 25 20, 20 25, 15 25 C 10 25, 5 20, 5 15 Z M 10 15 L 10 12 M 10 15 L 12 18 M 15 15 L 15 10 M 20 15 L 20 12 M 20 15 L 18 18"
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
