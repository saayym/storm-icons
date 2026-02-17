import { forwardRef } from 'react'

interface ListOrderedProps extends React.SVGProps<SVGSVGElement> {}

const ListOrdered = forwardRef<SVGSVGElement, ListOrderedProps>(
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
      <path d="M10 6h11"/><path d="M10 12h11"/><path d="M10 18h11"/><path d="M4 6h1v4m-2 0h3m-2 2h1c.5 0 1 .2 1 .7s-.5.7-1 .7-.7.3-.7.7.2.7.7.7h1"/>
    </svg>
  )
)

ListOrdered.displayName = 'ListOrdered'

export { ListOrdered }
export type { ListOrderedProps }
