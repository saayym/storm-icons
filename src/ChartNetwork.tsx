import { forwardRef } from 'react'

interface ChartNetworkProps extends React.SVGProps<SVGSVGElement> {}

const ChartNetwork = forwardRef<SVGSVGElement, ChartNetworkProps>(
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
      <circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="m8.5 7.5 3 7m4-7-3 7M8 5h7"/>
    </svg>
  )
)

ChartNetwork.displayName = 'ChartNetwork'

export { ChartNetwork }
export type { ChartNetworkProps }
