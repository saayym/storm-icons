import { forwardRef } from 'react'

interface SunsetProps extends React.SVGProps<SVGSVGElement> {}

const Sunset = forwardRef<SVGSVGElement, SunsetProps>(
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
      <path d="M3 17h1m16 0h1M5.6 10.6l.7.7m12.1-.7-.7.7M8 17a4 4 0 0 1 8 0"/><path d="M3 21h18"/><path d="M12 3v6l3-3M9 6l3 3"/>
    </svg>
  )
)

Sunset.displayName = 'Sunset'

export { Sunset }
export type { SunsetProps }
