import { forwardRef } from 'react'

interface AreaChartProps extends React.SVGProps<SVGSVGElement> {}

const AreaChart = forwardRef<SVGSVGElement, AreaChartProps>(
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
      <path d="M3 3v18h18"/><path fill="currentColor" fillOpacity=".15" stroke="none" d="m7 14 3.5-3.5L13 13l5-5v6z"/><path d="m7 14 3.5-3.5L13 13l5-5v6z"/>
    </svg>
  )
)

AreaChart.displayName = 'AreaChart'

export { AreaChart }
export type { AreaChartProps }
