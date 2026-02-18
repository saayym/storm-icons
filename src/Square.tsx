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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M3 3h18v18H3z"/>
    </svg>
  )
)

Square.displayName = 'Square'

export { Square }
export type { SquareProps }
