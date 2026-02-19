import { forwardRef } from 'react'

interface GitMergeProps extends React.SVGProps<SVGSVGElement> {}

const GitMerge = forwardRef<SVGSVGElement, GitMergeProps>(
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
      <path d="M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M15 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M7 8v8"/><path d="M7 8a4 4 0 0 0 4 4h4"/>
    </svg>
  )
)

GitMerge.displayName = 'GitMerge'

export { GitMerge }
export type { GitMergeProps }
