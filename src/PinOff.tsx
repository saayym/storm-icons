import { forwardRef } from 'react'

interface PinOffProps extends React.SVGProps<SVGSVGElement> {}

const PinOff = forwardRef<SVGSVGElement, PinOffProps>(
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
      <path d="m2 2 20 20"/><path d="M12 17v5"/><path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h14"/><path d="M15 6h1V2H8v4h1"/>
    </svg>
  )
)

PinOff.displayName = 'PinOff'

export { PinOff }
export type { PinOffProps }
