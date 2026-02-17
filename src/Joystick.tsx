import { forwardRef } from 'react'

interface JoystickProps extends React.SVGProps<SVGSVGElement> {}

const Joystick = forwardRef<SVGSVGElement, JoystickProps>(
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
      <circle cx="12" cy="5" r="3" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="5" r="3"/><path d="M12 8v8"/><path d="M6 16h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2"/>
    </svg>
  )
)

Joystick.displayName = 'Joystick'

export { Joystick }
export type { JoystickProps }
