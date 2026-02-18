import { forwardRef } from 'react'

interface CornerUpRightProps extends React.SVGProps<SVGSVGElement> {}

const CornerUpRight = forwardRef<SVGSVGElement, CornerUpRightProps>(
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
      <path d="m15 4 5 5-5 5"/><path d="M4 20V9h16"/>
    </svg>
  )
)

CornerUpRight.displayName = 'CornerUpRight'

export { CornerUpRight }
export type { CornerUpRightProps }
