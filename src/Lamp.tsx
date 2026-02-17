import { forwardRef } from 'react'

interface LampProps extends React.SVGProps<SVGSVGElement> {}

const Lamp = forwardRef<SVGSVGElement, LampProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M8 2h8l2 10H6z"/><path d="M8 2h8l2 10H6z"/><path d="M12 12v6"/><path d="M8 22h8"/><path d="M8 18h8"/>
    </svg>
  )
)

Lamp.displayName = 'Lamp'

export { Lamp }
export type { LampProps }
