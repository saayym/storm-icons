import { forwardRef } from 'react'

interface PipetteProps extends React.SVGProps<SVGSVGElement> {}

const Pipette = forwardRef<SVGSVGElement, PipetteProps>(
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
      <path d="m2 22 1-1h3l9-9"/><path d="m3 21 9-9"/><path d="m15 6 3-3 3 3-3 3"/>
    </svg>
  )
)

Pipette.displayName = 'Pipette'

export { Pipette }
export type { PipetteProps }
