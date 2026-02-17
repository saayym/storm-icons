import { forwardRef } from 'react'

interface CloudProps extends React.SVGProps<SVGSVGElement> {}

const Cloud = forwardRef<SVGSVGElement, CloudProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10"/><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10"/>
    </svg>
  )
)

Cloud.displayName = 'Cloud'

export { Cloud }
export type { CloudProps }
