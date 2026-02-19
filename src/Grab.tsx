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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M8 11V7.5a1.5 1.5 0 0 1 3 0V10"/><path d="M11 9.5v-3a1.5 1.5 0 0 1 3 0V10"/><path d="M14 7.5a1.5 1.5 0 0 1 3 0V10"/><path d="M17 9.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7L7 17q-.468-.718-3.286-5.728A1.5 1.5 0 0 1 4.25 9.25a1.87 1.87 0 0 1 2.28.28L8 11"/>
    </svg>
  )
)

Grab.displayName = 'Grab'

export { Grab }
export type { GrabProps }
