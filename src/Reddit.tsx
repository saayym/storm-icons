import { forwardRef } from 'react'

interface RedditProps extends React.SVGProps<SVGSVGElement> {}

const Reddit = forwardRef<SVGSVGElement, RedditProps>(
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
      <path d="M12 8c2.648 0 5.028.826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59-4.03 6.5-9 6.5-4.875 0-8.845-2.8-9-6.294l-1-.206a2.5 2.5 0 0 1 2.326-4.36C5.973 8.827 8.353 8 11.001 8z"/><path d="m12 8 1-5 6 1"/><path d="M18 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M9 13v.01"/><path d="M15 13v.01"/><path d="M10 17q1 .5 2 .5c1 0 1.333-.167 2-.5"/>
    </svg>
  )
)

Reddit.displayName = 'Reddit'

export { Reddit }
export type { RedditProps }
