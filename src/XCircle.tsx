import { forwardRef } from 'react'

interface XCircleProps extends React.SVGProps<SVGSVGElement> {}

const XCircle = forwardRef<SVGSVGElement, XCircleProps>(
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
      <circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>
    </svg>
  )
)

XCircle.displayName = 'XCircle'

export { XCircle }
export type { XCircleProps }
