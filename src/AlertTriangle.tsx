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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M12 3 2 21h20z"/><path d="M12 3 2 21h20z"/><path d="M12 9v4"/><path d="M12 17"/>
    </svg>
  )
)

AlertTriangle.displayName = 'AlertTriangle'

export { AlertTriangle }
export type { AlertTriangleProps }
