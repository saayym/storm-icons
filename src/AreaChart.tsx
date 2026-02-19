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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M3 3v18"/><path d="M3 21h18"/><path d="M6 21v-6l4-6 4 4 7-9v17"/>
    </svg>
  )
)

AreaChart.displayName = 'AreaChart'

export { AreaChart }
export type { AreaChartProps }
