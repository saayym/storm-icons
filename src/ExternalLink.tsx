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
      <path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/><path d="m11 13 9-9"/><path d="M15 4h5v5"/>
    </svg>
  )
)

ExternalLink.displayName = 'ExternalLink'

export { ExternalLink }
export type { ExternalLinkProps }
