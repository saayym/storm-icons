import { forwardRef } from 'react'

interface BarChartProps extends React.SVGProps<SVGSVGElement> {}

const BarChart = forwardRef<SVGSVGElement, BarChartProps>(
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
      <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
    </svg>
  )
)

BarChart.displayName = 'BarChart'

export { BarChart }
export type { BarChartProps }
