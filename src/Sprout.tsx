import { forwardRef } from 'react'

interface SproutProps extends React.SVGProps<SVGSVGElement> {}

const Sprout = forwardRef<SVGSVGElement, SproutProps>(
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
      <path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8"/><path d="M14.5 6c-1.2.4-2 1-2.6 1.8.1-.3.2-.5.2-.8a6 6 0 0 1 5.4-5c-.4 2.1-1.4 3.2-3 4"/>
    </svg>
  )
)

Sprout.displayName = 'Sprout'

export { Sprout }
export type { SproutProps }
