import { forwardRef } from 'react'

interface GamepadProps extends React.SVGProps<SVGSVGElement> {}

const Gamepad = forwardRef<SVGSVGElement, GamepadProps>(
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
      <rect x="2" y="6" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="2" y="6" rx="2"/><path d="M6 10v4"/><path d="M4 12h4"/><circle cx="16" cy="10" r="1"/><circle cx="19" cy="13" r="1"/>
    </svg>
  )
)

Gamepad.displayName = 'Gamepad'

export { Gamepad }
export type { GamepadProps }
