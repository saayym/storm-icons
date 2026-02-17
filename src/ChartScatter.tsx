import { forwardRef } from 'react'

interface ChartScatterProps extends React.SVGProps<SVGSVGElement> {}

const ChartScatter = forwardRef<SVGSVGElement, ChartScatterProps>(
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
      <path d="M3 3v18h18"/><circle cx="7" cy="15" r="1"/><circle cx="11" cy="11" r="1"/><circle cx="15" cy="7" r="1"/><circle cx="17" cy="13" r="1"/><circle cx="9" cy="8" r="1"/>
    </svg>
  )
)

ChartScatter.displayName = 'ChartScatter'

export { ChartScatter }
export type { ChartScatterProps }
