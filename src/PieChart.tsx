import { forwardRef } from 'react'

interface PieChartProps extends React.SVGProps<SVGSVGElement> {}

const PieChart = forwardRef<SVGSVGElement, PieChartProps>(
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
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
    </svg>
  )
)

PieChart.displayName = 'PieChart'

export { PieChart }
export type { PieChartProps }
