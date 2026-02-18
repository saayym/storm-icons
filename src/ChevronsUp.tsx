import { forwardRef } from 'react'

interface ChevronsUpProps extends React.SVGProps<SVGSVGElement> {}

const ChevronsUp = forwardRef<SVGSVGElement, ChevronsUpProps>(
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
      <path d="m6 11 6-6 6 6"/><path d="m6 18 6-6 6 6"/>
    </svg>
  )
)

ChevronsUp.displayName = 'ChevronsUp'

export { ChevronsUp }
export type { ChevronsUpProps }
