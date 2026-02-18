import { forwardRef } from 'react'

interface SortAscProps extends React.SVGProps<SVGSVGElement> {}

const SortAsc = forwardRef<SVGSVGElement, SortAscProps>(
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
      <path d="M4 6h7"/><path d="M4 12h11"/><path d="M4 18h15"/>
    </svg>
  )
)

SortAsc.displayName = 'SortAsc'

export { SortAsc }
export type { SortAscProps }
