import { forwardRef } from 'react'

interface XSquareProps extends React.SVGProps<SVGSVGElement> {}

const XSquare = forwardRef<SVGSVGElement, XSquareProps>(
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
      <rect x="3" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="3" y="3" rx="2"/><path d="m9 9 6 6"/><path d="m15 9-6 6"/>
    </svg>
  )
)

XSquare.displayName = 'XSquare'

export { XSquare }
export type { XSquareProps }
