import { forwardRef } from 'react'

interface BatteryLowProps extends React.SVGProps<SVGSVGElement> {}

const BatteryLow = forwardRef<SVGSVGElement, BatteryLowProps>(
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
      <rect x="1" y="6" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="1" y="6" rx="2"/><path d="M23 10v4"/><rect x="4" y="10" rx=".5"/>
    </svg>
  )
)

BatteryLow.displayName = 'BatteryLow'

export { BatteryLow }
export type { BatteryLowProps }
