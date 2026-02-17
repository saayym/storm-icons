import { forwardRef } from 'react'

interface GanttChartProps extends React.SVGProps<SVGSVGElement> {}

const GanttChart = forwardRef<SVGSVGElement, GanttChartProps>(
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
      <path d="M8 6h10M6 12h9m-4 6h7"/>
    </svg>
  )
)

GanttChart.displayName = 'GanttChart'

export { GanttChart }
export type { GanttChartProps }
