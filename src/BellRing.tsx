import { forwardRef } from 'react'

interface BellRingProps extends React.SVGProps<SVGSVGElement> {}

const BellRing = forwardRef<SVGSVGElement, BellRingProps>(
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
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><path d="m2 4 1.5 1.5"/><path d="m22 4-1.5 1.5"/>
    </svg>
  )
)

BellRing.displayName = 'BellRing'

export { BellRing }
export type { BellRingProps }
