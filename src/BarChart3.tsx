import { forwardRef } from 'react'

interface BarChart3Props extends React.SVGProps<SVGSVGElement> {}

const BarChart3 = forwardRef<SVGSVGElement, BarChart3Props>(
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
      <path d="M3 3v18h18"/><path d="M18 17V9m-5 8V5M8 17v-3"/>
    </svg>
  )
)

BarChart3.displayName = 'BarChart3'

export { BarChart3 }
export type { BarChart3Props }
