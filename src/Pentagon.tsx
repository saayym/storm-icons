import { forwardRef } from 'react'

interface PentagonProps extends React.SVGProps<SVGSVGElement> {}

const Pentagon = forwardRef<SVGSVGElement, PentagonProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m12 2 9.5 7L18 19.5H6L2.5 9z"/><path d="m12 2 9.5 7L18 19.5H6L2.5 9z"/>
    </svg>
  )
)

Pentagon.displayName = 'Pentagon'

export { Pentagon }
export type { PentagonProps }
