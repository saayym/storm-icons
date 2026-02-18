import { forwardRef } from 'react'

interface ChevronsRightProps extends React.SVGProps<SVGSVGElement> {}

const ChevronsRight = forwardRef<SVGSVGElement, ChevronsRightProps>(
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
      <path d="m13 17 5-5-5-5"/><path d="m6 17 5-5-5-5"/>
    </svg>
  )
)

ChevronsRight.displayName = 'ChevronsRight'

export { ChevronsRight }
export type { ChevronsRightProps }
