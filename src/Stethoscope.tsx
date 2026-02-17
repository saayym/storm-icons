import { forwardRef } from 'react'

interface StethoscopeProps extends React.SVGProps<SVGSVGElement> {}

const Stethoscope = forwardRef<SVGSVGElement, StethoscopeProps>(
  (props, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 4v4a6 6 0 0 0 12 0V4"/><circle cx="20" cy="12" r="2"/><path d="M20 14v2a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-3"/><circle cx="4" cy="4" r="1"/><circle cx="16" cy="4" r="1"/>
    </svg>
  )
)

Stethoscope.displayName = 'Stethoscope'

export { Stethoscope }
export type { StethoscopeProps }
