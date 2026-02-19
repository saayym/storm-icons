import { forwardRef } from 'react'

interface ScatterChartProps extends React.SVGProps<SVGSVGElement> {}

const ScatterChart = forwardRef<SVGSVGElement, ScatterChartProps>(
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
      <path d="M3 3v18"/><path d="M3 21h18"/><circle cx="8" cy="16" r="1"/><circle cx="11" cy="11" r="1"/><circle cx="14" cy="14" r="1"/><circle cx="16" cy="8" r="1"/><circle cx="19" cy="6" r="1"/>
    </svg>
  )
)

ScatterChart.displayName = 'ScatterChart'

export { ScatterChart }
export type { ScatterChartProps }
