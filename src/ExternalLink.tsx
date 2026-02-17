import { forwardRef } from 'react'

interface ExternalLinkProps extends React.SVGProps<SVGSVGElement> {}

const ExternalLink = forwardRef<SVGSVGElement, ExternalLinkProps>(
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
      <path d="M18 14v5l-2 2H5l-2-2V8l2-2h5"/><path d="M14 3h7v7"/><path d="M21 3 10 14"/>
    </svg>
  )
)

ExternalLink.displayName = 'ExternalLink'

export { ExternalLink }
export type { ExternalLinkProps }
