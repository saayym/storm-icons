import { forwardRef } from 'react'

interface ArmchairProps extends React.SVGProps<SVGSVGElement> {}

const Armchair = forwardRef<SVGSVGElement, ArmchairProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M5 11V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4"/><path d="M19 11V7a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v4"/><path d="M2 11a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v3a1 1 0 0 0 1 1h2"/><path d="M22 11a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v3a1 1 0 0 1-1 1h-2"/><path d="M4 17h16"/>
    </svg>
  )
)

Armchair.displayName = 'Armchair'

export { Armchair }
export type { ArmchairProps }
