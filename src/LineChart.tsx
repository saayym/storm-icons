import { forwardRef } from 'react'

interface LineChartProps extends React.SVGProps<SVGSVGElement> {}

const LineChart = forwardRef<SVGSVGElement, LineChartProps>(
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
      <path d="M3 3v18h18"/><path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3"/>
    </svg>
  )
)

LineChart.displayName = 'LineChart'

export { LineChart }
export type { LineChartProps }
