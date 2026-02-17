import { forwardRef } from 'react'

interface SigmaProps extends React.SVGProps<SVGSVGElement> {}

const Sigma = forwardRef<SVGSVGElement, SigmaProps>(
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
      <path d="M18 6H6l6 6-6 6h12"/>
    </svg>
  )
)

Sigma.displayName = 'Sigma'

export { Sigma }
export type { SigmaProps }
