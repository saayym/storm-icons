import { forwardRef } from 'react'

interface MoonProps extends React.SVGProps<SVGSVGElement> {}

const Moon = forwardRef<SVGSVGElement, MoonProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79"/><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79"/>
    </svg>
  )
)

Moon.displayName = 'Moon'

export { Moon }
export type { MoonProps }
