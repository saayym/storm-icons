import { forwardRef } from 'react'

interface BellProps extends React.SVGProps<SVGSVGElement> {}

const Bell = forwardRef<SVGSVGElement, BellProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M8 4h8l2 5v4l1 2H5l1-2V9z"/><path d="M12 2v2"/><path d="M8 4h8l2 5v4l1 2H5l1-2V9z"/><path d="M10 19h4"/>
    </svg>
  )
)

Bell.displayName = 'Bell'

export { Bell }
export type { BellProps }
