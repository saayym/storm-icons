import { forwardRef } from 'react'

interface DollarSignProps extends React.SVGProps<SVGSVGElement> {}

const DollarSign = forwardRef<SVGSVGElement, DollarSignProps>(
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
      <path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"/>
    </svg>
  )
)

DollarSign.displayName = 'DollarSign'

export { DollarSign }
export type { DollarSignProps }
