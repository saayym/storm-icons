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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M18 4H6l6 8-6 8h12"/>
    </svg>
  )
)

Sigma.displayName = 'Sigma'

export { Sigma }
export type { SigmaProps }
