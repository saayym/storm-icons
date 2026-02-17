import { forwardRef } from 'react'

interface FlameProps extends React.SVGProps<SVGSVGElement> {}

const Flame = forwardRef<SVGSVGElement, FlameProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14 0-5.5 2-7.5C13 3 14 4.74 14 7c2-1 4 1.21 4 5.5a6 6 0 1 1-12 0c0-1 .5-1.5 1-2.29z"/><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14 0-5.5 2-7.5C13 3 14 4.74 14 7c2-1 4 1.21 4 5.5a6 6 0 1 1-12 0c0-1 .5-1.5 1-2.29z"/>
    </svg>
  )
)

Flame.displayName = 'Flame'

export { Flame }
export type { FlameProps }
