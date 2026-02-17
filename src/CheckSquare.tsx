import { forwardRef } from 'react'

interface CheckSquareProps extends React.SVGProps<SVGSVGElement> {}

const CheckSquare = forwardRef<SVGSVGElement, CheckSquareProps>(
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
      <rect x="3" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
    </svg>
  )
)

CheckSquare.displayName = 'CheckSquare'

export { CheckSquare }
export type { CheckSquareProps }
