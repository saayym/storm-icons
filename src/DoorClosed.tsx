import { forwardRef } from 'react'

interface DoorClosedProps extends React.SVGProps<SVGSVGElement> {}

const DoorClosed = forwardRef<SVGSVGElement, DoorClosedProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M4 2h16v20H4z"/><path d="M4 2h16v20H4z"/><circle cx="15" cy="13" r="1"/>
    </svg>
  )
)

DoorClosed.displayName = 'DoorClosed'

export { DoorClosed }
export type { DoorClosedProps }
