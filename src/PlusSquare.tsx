import { forwardRef } from 'react'

interface PlusSquareProps extends React.SVGProps<SVGSVGElement> {}

const PlusSquare = forwardRef<SVGSVGElement, PlusSquareProps>(
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
      <rect x="3" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="M8 12h8"/>
    </svg>
  )
)

PlusSquare.displayName = 'PlusSquare'

export { PlusSquare }
export type { PlusSquareProps }
