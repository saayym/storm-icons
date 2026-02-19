import { forwardRef } from 'react'

interface GaugeProps extends React.SVGProps<SVGSVGElement> {}

const Gauge = forwardRef<SVGSVGElement, GaugeProps>(
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
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"/><path d="m12 12 4-4"/><path d="M2 12h2"/><path d="M20 12h2"/>
    </svg>
  )
)

Gauge.displayName = 'Gauge'

export { Gauge }
export type { GaugeProps }
