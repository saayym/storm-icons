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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M3 3v18"/><path d="M3 21h18"/><path d="m6 16 4-6 4 4 7-9"/>
    </svg>
  )
)

LineChart.displayName = 'LineChart'

export { LineChart }
export type { LineChartProps }
