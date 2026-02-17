import { forwardRef } from 'react'

interface BugProps extends React.SVGProps<SVGSVGElement> {}

const Bug = forwardRef<SVGSVGElement, BugProps>(
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
      <rect x="8" y="6" rx="4"/><path d="M3 14h2c1 0 2-.5 2-2q0 0 0 0"/><path d="M21 14h-2c-1 0-2-.5-2-2"/><path d="M3 10h3m15 0h-3"/><path d="M3 18h3m15 0h-3"/><path d="m9 2 1 4m5-4-1 4"/>
    </svg>
  )
)

Bug.displayName = 'Bug'

export { Bug }
export type { BugProps }
