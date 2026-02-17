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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="1"/><rect x="14" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="1"/><rect x="3" y="3" rx="1"/><rect x="14" y="3" rx="1"/>
    </svg>
  )
)

Columns.displayName = 'Columns'

export { Columns }
export type { ColumnsProps }
