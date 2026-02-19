import { forwardRef } from 'react'

interface GitPullRequestProps extends React.SVGProps<SVGSVGElement> {}

const GitPullRequest = forwardRef<SVGSVGElement, GitPullRequestProps>(
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
      <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M6 9v12"/>
    </svg>
  )
)

GitPullRequest.displayName = 'GitPullRequest'

export { GitPullRequest }
export type { GitPullRequestProps }
