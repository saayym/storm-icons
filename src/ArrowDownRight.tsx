import { forwardRef } from 'react'

interface ArrowDownRightProps extends React.SVGProps<SVGSVGElement> {}

const ArrowDownRight = forwardRef<SVGSVGElement, ArrowDownRightProps>(
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
      <path d="m7 7 10 10"/><path d="M17 8v9H8"/>
    </svg>
  )
)

ArrowDownRight.displayName = 'ArrowDownRight'

export { ArrowDownRight }
export type { ArrowDownRightProps }
