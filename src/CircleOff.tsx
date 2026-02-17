import { forwardRef } from 'react'

interface CircleOffProps extends React.SVGProps<SVGSVGElement> {}

const CircleOff = forwardRef<SVGSVGElement, CircleOffProps>(
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
      <path d="m2 2 20 20"/><path d="M8.35 2.69A10 10 0 0 1 21.3 15.65"/><path d="M15.65 21.31A10 10 0 0 1 2.69 8.35"/>
    </svg>
  )
)

CircleOff.displayName = 'CircleOff'

export { CircleOff }
export type { CircleOffProps }
