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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="m6 6 6 6 6-6"/><path d="m6 13 6 6 6-6"/>
    </svg>
  )
)

ChevronsDown.displayName = 'ChevronsDown'

export { ChevronsDown }
export type { ChevronsDownProps }
