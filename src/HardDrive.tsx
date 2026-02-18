import { forwardRef } from 'react'

interface HardDriveProps extends React.SVGProps<SVGSVGElement> {}

const HardDrive = forwardRef<SVGSVGElement, HardDriveProps>(
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
      <path d="M3 4h18v16H3z"/><path d="M3 14h18"/><circle cx="17.5" cy="17.5" r="1"/>
    </svg>
  )
)

HardDrive.displayName = 'HardDrive'

export { HardDrive }
export type { HardDriveProps }
