import { forwardRef } from 'react'

interface RowsProps extends React.SVGProps<SVGSVGElement> {}

const Rows = forwardRef<SVGSVGElement, RowsProps>(
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
      <rect width="18" height="5" x="3" y="3" rx="1"/><rect width="18" height="5" x="3" y="10" rx="1"/><rect width="18" height="5" x="3" y="17" rx="1"/>
    </svg>
  )
)

Rows.displayName = 'Rows'

export { Rows }
export type { RowsProps }
