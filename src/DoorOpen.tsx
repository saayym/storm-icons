import { forwardRef } from 'react'

interface DoorOpenProps extends React.SVGProps<SVGSVGElement> {}

const DoorOpen = forwardRef<SVGSVGElement, DoorOpenProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M3 2h14v20H3z"/><path d="M3 2h14v20H3z"/><path d="M17 2h4v20h-4"/><circle cx="14" cy="13" r="1"/>
    </svg>
  )
)

DoorOpen.displayName = 'DoorOpen'

export { DoorOpen }
export type { DoorOpenProps }
