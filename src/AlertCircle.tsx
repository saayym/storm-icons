import { forwardRef } from 'react'

interface AlertCircleProps extends React.SVGProps<SVGSVGElement> {}

const AlertCircle = forwardRef<SVGSVGElement, AlertCircleProps>(
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
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
    </svg>
  )
)

AlertCircle.displayName = 'AlertCircle'

export { AlertCircle }
export type { AlertCircleProps }
