import { forwardRef } from 'react'

interface GitBranchProps extends React.SVGProps<SVGSVGElement> {}

const GitBranch = forwardRef<SVGSVGElement, GitBranchProps>(
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
      <path d="M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M15 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M7 8v8"/><path d="M9 18h6a2 2 0 0 0 2-2v-5"/><path d="m14 14 3-3 3 3"/>
    </svg>
  )
)

GitBranch.displayName = 'GitBranch'

export { GitBranch }
export type { GitBranchProps }
