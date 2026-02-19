import { forwardRef } from 'react'

interface PlugProps extends React.SVGProps<SVGSVGElement> {}

const Plug = forwardRef<SVGSVGElement, PlugProps>(
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
      <path d="M9.785 6 18 14.215l-2.054 2.054a5.81 5.81 0 1 1-8.215-8.215z"/><path d="m4 20 3.5-3.5"/><path d="m15 4-3.5 3.5"/><path d="m20 9-3.5 3.5"/>
    </svg>
  )
)

Plug.displayName = 'Plug'

export { Plug }
export type { PlugProps }
