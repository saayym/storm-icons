import { forwardRef } from 'react'

interface ShipProps extends React.SVGProps<SVGSVGElement> {}

const Ship = forwardRef<SVGSVGElement, ShipProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m2 20 .8-2.4A4 4 0 0 1 6.6 15h10.8a4 4 0 0 1 3.8 2.6L22 20z"/><path d="m2 20 .8-2.4A4 4 0 0 1 6.6 15h10.8a4 4 0 0 1 3.8 2.6L22 20z"/><path d="M7 15V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7"/><path d="M12 2v4"/>
    </svg>
  )
)

Ship.displayName = 'Ship'

export { Ship }
export type { ShipProps }
