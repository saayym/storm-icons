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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m7 7 5 5-5 5"/><path d="m13 7 5 5-5 5"/>
    </svg>
  )
)

ChevronsRight.displayName = 'ChevronsRight'

export { ChevronsRight }
export type { ChevronsRightProps }
