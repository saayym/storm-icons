import { forwardRef } from 'react'

interface CheckCircleProps extends React.SVGProps<SVGSVGElement> {}

const CheckCircle = forwardRef<SVGSVGElement, CheckCircleProps>(
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
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>
    </svg>
  )
)

CheckCircle.displayName = 'CheckCircle'

export { CheckCircle }
export type { CheckCircleProps }
