import { forwardRef } from 'react'

interface GitForkProps extends React.SVGProps<SVGSVGElement> {}

const GitFork = forwardRef<SVGSVGElement, GitForkProps>(
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
      <circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"/><path d="M12 12v3"/>
    </svg>
  )
)

GitFork.displayName = 'GitFork'

export { GitFork }
export type { GitForkProps }
