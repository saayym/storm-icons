import { forwardRef } from 'react'

interface Minimize2Props extends React.SVGProps<SVGSVGElement> {}

const Minimize2 = forwardRef<SVGSVGElement, Minimize2Props>(
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
      <path d="M4 14h6v6"/><path d="m3 21 7-7"/><path d="M20 10h-6V4"/><path d="m21 3-7 7"/>
    </svg>
  )
)

Minimize2.displayName = 'Minimize2'

export { Minimize2 }
export type { Minimize2Props }
