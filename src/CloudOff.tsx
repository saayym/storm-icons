import { forwardRef } from 'react'

interface CloudOffProps extends React.SVGProps<SVGSVGElement> {}

const CloudOff = forwardRef<SVGSVGElement, CloudOffProps>(
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
      <path d="m2 2 20 20"/><path d="M5.47 5.47A7 7 0 0 0 4 14.899 7 7 0 0 0 9 20h8.5"/><path d="M13 4a7 7 0 0 1 2.71 4h1.79a4.5 4.5 0 0 1 3.5 7.327"/>
    </svg>
  )
)

CloudOff.displayName = 'CloudOff'

export { CloudOff }
export type { CloudOffProps }
