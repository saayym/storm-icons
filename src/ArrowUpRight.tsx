import { forwardRef } from 'react'

interface ArrowUpRightProps extends React.SVGProps<SVGSVGElement> {}

const ArrowUpRight = forwardRef<SVGSVGElement, ArrowUpRightProps>(
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
      <path d="M17 7 7 17"/><path d="M8 7h9v9"/>
    </svg>
  )
)

ArrowUpRight.displayName = 'ArrowUpRight'

export { ArrowUpRight }
export type { ArrowUpRightProps }
