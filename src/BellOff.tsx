import { forwardRef } from 'react'

interface BellOffProps extends React.SVGProps<SVGSVGElement> {}

const BellOff = forwardRef<SVGSVGElement, BellOffProps>(
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
      <path d="m1 1 22 22"/><path d="M17 17H5l1-2V9a7 7 0 0 1 4-6.32"/><path d="M18 13V9a6 6 0 0 0-1.16-3.55"/><path d="M10 19h4"/>
    </svg>
  )
)

BellOff.displayName = 'BellOff'

export { BellOff }
export type { BellOffProps }
