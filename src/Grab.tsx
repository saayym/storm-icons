import { forwardRef } from 'react'

interface GrabProps extends React.SVGProps<SVGSVGElement> {}

const Grab = forwardRef<SVGSVGElement, GrabProps>(
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
      <path d="M18 11.5V9a2 2 0 0 0-4 0v1a2 2 0 0 0-4 0v2a2 2 0 0 0-4 0v2c0 4.42 3.58 8 8 8h1a7 7 0 0 0 7-7v-1.5a2 2 0 0 0-4 0z"/>
    </svg>
  )
)

Grab.displayName = 'Grab'

export { Grab }
export type { GrabProps }
