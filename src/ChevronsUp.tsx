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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m17 17-5-5-5 5"/><path d="m17 11-5-5-5 5"/>
    </svg>
  )
)

ChevronsUp.displayName = 'ChevronsUp'

export { ChevronsUp }
export type { ChevronsUpProps }
