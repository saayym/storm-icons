import { forwardRef } from 'react'

interface BarChart2Props extends React.SVGProps<SVGSVGElement> {}

const BarChart2 = forwardRef<SVGSVGElement, BarChart2Props>(
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
      <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
    </svg>
  )
)

BarChart2.displayName = 'BarChart2'

export { BarChart2 }
export type { BarChart2Props }
