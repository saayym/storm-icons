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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity=".15" stroke="none"/><path d="M12 10V6m-7.07 4.93 1.41-1.41M2 18h2m16 0h2m-2.93-7.07-1.41-1.41"/><path d="M3 22h18"/><path d="m16 6-4 4-4-4"/>
    </svg>
  )
)

Sunset.displayName = 'Sunset'

export { Sunset }
export type { SunsetProps }
