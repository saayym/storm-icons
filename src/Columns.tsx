import { forwardRef } from 'react'

interface ColumnsProps extends React.SVGProps<SVGSVGElement> {}

const Columns = forwardRef<SVGSVGElement, ColumnsProps>(
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
      <path d="M3 3h8v18H3z"/><path d="M13 3h8v18h-8z"/>
    </svg>
  )
)

Columns.displayName = 'Columns'

export { Columns }
export type { ColumnsProps }
