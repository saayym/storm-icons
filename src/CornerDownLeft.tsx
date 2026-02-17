import { forwardRef } from 'react'

interface CornerDownLeftProps extends React.SVGProps<SVGSVGElement> {}

const CornerDownLeft = forwardRef<SVGSVGElement, CornerDownLeftProps>(
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
      <path d="m9 10-5 5 5 5"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>
    </svg>
  )
)

CornerDownLeft.displayName = 'CornerDownLeft'

export { CornerDownLeft }
export type { CornerDownLeftProps }
