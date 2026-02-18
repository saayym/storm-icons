import { forwardRef } from 'react'

interface CompassProps extends React.SVGProps<SVGSVGElement> {}

const Compass = forwardRef<SVGSVGElement, CompassProps>(
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
      <circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/>
    </svg>
  )
)

Compass.displayName = 'Compass'

export { Compass }
export type { CompassProps }
