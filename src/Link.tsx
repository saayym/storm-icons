import { forwardRef } from 'react'

interface LinkProps extends React.SVGProps<SVGSVGElement> {}

const Link = forwardRef<SVGSVGElement, LinkProps>(
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
      <path d="M9 7h3l3 3-3 3H9l-3-3z"/><path d="M15 11h-3l-3 3 3 3h3l3-3z"/>
    </svg>
  )
)

Link.displayName = 'Link'

export { Link }
export type { LinkProps }
