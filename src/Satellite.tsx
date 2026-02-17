import { forwardRef } from 'react'

interface SatelliteProps extends React.SVGProps<SVGSVGElement> {}

const Satellite = forwardRef<SVGSVGElement, SatelliteProps>(
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
      <path d="M13 7 9 3 3 9l4 4"/><path d="m17 11 4 4-6 6-4-4"/><path d="M7.68 16.32a1 1 0 0 0 0 1.42l.58.58a1 1 0 0 0 1.42 0l6.64-6.64a1 1 0 0 0 0-1.42l-.58-.58a1 1 0 0 0-1.42 0z"/>
    </svg>
  )
)

Satellite.displayName = 'Satellite'

export { Satellite }
export type { SatelliteProps }
