import { forwardRef } from 'react'

interface ChevronsLeftProps extends React.SVGProps<SVGSVGElement> {}

const ChevronsLeft = forwardRef<SVGSVGElement, ChevronsLeftProps>(
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
      <path d="m17 7-5 5 5 5"/><path d="m11 7-5 5 5 5"/>
    </svg>
  )
)

ChevronsLeft.displayName = 'ChevronsLeft'

export { ChevronsLeft }
export type { ChevronsLeftProps }
