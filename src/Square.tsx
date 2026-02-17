import { forwardRef } from 'react'

interface SquareProps extends React.SVGProps<SVGSVGElement> {}

const Square = forwardRef<SVGSVGElement, SquareProps>(
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
      <rect x="3" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="3" y="3" rx="2"/>
    </svg>
  )
)

Square.displayName = 'Square'

export { Square }
export type { SquareProps }
