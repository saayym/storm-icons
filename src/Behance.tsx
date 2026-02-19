import { forwardRef } from 'react'

interface BehanceProps extends React.SVGProps<SVGSVGElement> {}

const Behance = forwardRef<SVGSVGElement, BehanceProps>(
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
      <path d="M3 18V6h4.5a3 3 0 0 1 0 6 3 3 0 0 1 0 6z"/><path d="M3 12h4.5"/><path d="M14 13h7a3.5 3.5 0 0 0-7 0v2a3.5 3.5 0 0 0 6.64 1"/><path d="M16 6h3"/>
    </svg>
  )
)

Behance.displayName = 'Behance'

export { Behance }
export type { BehanceProps }
