import { forwardRef } from 'react'

interface ListChecksProps extends React.SVGProps<SVGSVGElement> {}

const ListChecks = forwardRef<SVGSVGElement, ListChecksProps>(
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
      <path d="M10 6h11m-11 6h11m-11 6h11"/><path d="m3 6 2 2 4-4m-6 8 2 2 4-4m-6 8 2 2 4-4"/>
    </svg>
  )
)

ListChecks.displayName = 'ListChecks'

export { ListChecks }
export type { ListChecksProps }
