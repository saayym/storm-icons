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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M18 13v6H5V6h6"/><path d="M15 4h5v5"/><path d="M20 4 10 14"/>
    </svg>
  )
)

ExternalLink.displayName = 'ExternalLink'

export { ExternalLink }
export type { ExternalLinkProps }
