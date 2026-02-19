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
      <path d="M6 18v-6a3 3 0 0 1 3-3h10l-4-4m0 8 4-4"/>
    </svg>
  )
)

CornerUpRight.displayName = 'CornerUpRight'

export { CornerUpRight }
export type { CornerUpRightProps }
