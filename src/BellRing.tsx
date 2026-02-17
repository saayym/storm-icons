import { forwardRef } from 'react'

interface BellRingProps extends React.SVGProps<SVGSVGElement> {}

const BellRing = forwardRef<SVGSVGElement, BellRingProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10 19h4"/><path d="m2 3 1.5 1.5M22 3l-1.5 1.5"/>
    </svg>
  )
)

BellRing.displayName = 'BellRing'

export { BellRing }
export type { BellRingProps }
