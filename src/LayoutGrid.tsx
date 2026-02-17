import { forwardRef } from 'react'

interface LayoutGridProps extends React.SVGProps<SVGSVGElement> {}

const LayoutGrid = forwardRef<SVGSVGElement, LayoutGridProps>(
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
      <rect x="3" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="1"/><rect x="14" y="3" fill="currentColor" fillOpacity=".15" stroke="none" rx="1"/><rect x="3" y="14" fill="currentColor" fillOpacity=".15" stroke="none" rx="1"/><rect x="14" y="14" fill="currentColor" fillOpacity=".15" stroke="none" rx="1"/><rect x="3" y="3" rx="1"/><rect x="14" y="3" rx="1"/><rect x="3" y="14" rx="1"/><rect x="14" y="14" rx="1"/>
    </svg>
  )
)

LayoutGrid.displayName = 'LayoutGrid'

export { LayoutGrid }
export type { LayoutGridProps }
