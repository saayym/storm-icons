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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <rect width="8" height="14" x="8" y="6" rx="4"/><path d="M12 6V2"/><path d="M9 3h6"/><path d="M5 10h3"/><path d="M16 10h3"/><path d="M5 16h3"/><path d="M16 16h3"/><path d="M12 10v10"/>
    </svg>
  )
)

Bug.displayName = 'Bug'

export { Bug }
export type { BugProps }
