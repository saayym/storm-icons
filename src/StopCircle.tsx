import { forwardRef } from 'react'

interface StopCircleProps extends React.SVGProps<SVGSVGElement> {}

const StopCircle = forwardRef<SVGSVGElement, StopCircleProps>(
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
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="12" r="10"/><path d="M9 9h6v6H9z"/>
    </svg>
  )
)

StopCircle.displayName = 'StopCircle'

export { StopCircle }
export type { StopCircleProps }
