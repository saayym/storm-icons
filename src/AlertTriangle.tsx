import { forwardRef } from 'react'

interface AlertTriangleProps extends React.SVGProps<SVGSVGElement> {}

const AlertTriangle = forwardRef<SVGSVGElement, AlertTriangleProps>(
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
      <path d="M12 3 3 21h18z"/><path d="M12 10v5"/><path d="M12 18h0"/>
    </svg>
  )
)

AlertTriangle.displayName = 'AlertTriangle'

export { AlertTriangle }
export type { AlertTriangleProps }
