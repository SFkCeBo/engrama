import type { SVGProps } from "react";

/** Glifo de WhatsApp (trazo único, mismo grosor que lucide). */
export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 20.5l1.3-4.1A8.5 8.5 0 1 1 8 19.6L3.5 20.5Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 8.6c0 3 2.4 6 5.6 6.4l1-1.1-1.7-.9-.8.7c-1-.4-2-1.4-2.4-2.4l.7-.8-.9-1.7L9.4 9"
      />
    </svg>
  );
}
