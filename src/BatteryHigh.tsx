import { forwardRef } from 'react'

interface BatteryHighProps extends React.SVGProps<SVGSVGElement> {}

const BatteryHigh = forwardRef<SVGSVGElement, BatteryHighProps>(
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
      <rect width="18" height="10" x="2" y="7" rx="1"/><path d="M22 11v2"/><path fill="currentColor" stroke="none" d="M4 9h12v6H4z"/>
    </svg>
  )
)

BatteryHigh.displayName = 'BatteryHigh'

export { BatteryHigh }
export type { BatteryHighProps }
