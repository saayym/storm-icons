import { forwardRef } from 'react'

interface CloudDrizzleProps extends React.SVGProps<SVGSVGElement> {}

const CloudDrizzle = forwardRef<SVGSVGElement, CloudDrizzleProps>(
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
      <path d="M4.14 15.08A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.97"/><path d="M8 19v1m0-6v1m8 4v1m0-6v1m-4 6v1m0-6v1"/>
    </svg>
  )
)

CloudDrizzle.displayName = 'CloudDrizzle'

export { CloudDrizzle }
export type { CloudDrizzleProps }
