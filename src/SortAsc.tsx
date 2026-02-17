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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 5h10M11 9h7m-7 4h4"/><path d="m3 21 4-4 4 4"/><path d="M7 4v17"/>
    </svg>
  )
)

SortAsc.displayName = 'SortAsc'

export { SortAsc }
export type { SortAscProps }
