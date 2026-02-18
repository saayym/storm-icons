import { forwardRef } from 'react'

interface SortDescProps extends React.SVGProps<SVGSVGElement> {}

const SortDesc = forwardRef<SVGSVGElement, SortDescProps>(
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
      <path d="M4 6h15"/><path d="M4 12h11"/><path d="M4 18h7"/>
    </svg>
  )
)

SortDesc.displayName = 'SortDesc'

export { SortDesc }
export type { SortDescProps }
