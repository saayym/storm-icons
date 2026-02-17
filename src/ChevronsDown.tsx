import { forwardRef } from 'react'

interface ChevronsDownProps extends React.SVGProps<SVGSVGElement> {}

const ChevronsDown = forwardRef<SVGSVGElement, ChevronsDownProps>(
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
      <path d="m7 7 5 5 5-5"/><path d="m7 13 5 5 5-5"/>
    </svg>
  )
)

ChevronsDown.displayName = 'ChevronsDown'

export { ChevronsDown }
export type { ChevronsDownProps }
