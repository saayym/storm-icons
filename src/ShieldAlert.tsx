import { forwardRef } from 'react'

interface ShieldAlertProps extends React.SVGProps<SVGSVGElement> {}

const ShieldAlert = forwardRef<SVGSVGElement, ShieldAlertProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="M12 8v4"/><path d="M12 16h.01"/>
    </svg>
  )
)

ShieldAlert.displayName = 'ShieldAlert'

export { ShieldAlert }
export type { ShieldAlertProps }
