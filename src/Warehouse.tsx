import { forwardRef } from 'react'

interface WarehouseProps extends React.SVGProps<SVGSVGElement> {}

const Warehouse = forwardRef<SVGSVGElement, WarehouseProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M4 21V10l8-6 8 6v11z"/><path d="M4 21V10l8-6 8 6v11"/><path d="M2 21h20"/><path d="M9 17h6v4H9z"/>
    </svg>
  )
)

Warehouse.displayName = 'Warehouse'

export { Warehouse }
export type { WarehouseProps }
