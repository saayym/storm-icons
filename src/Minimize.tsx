import { forwardRef } from 'react'

interface MinimizeProps extends React.SVGProps<SVGSVGElement> {}

const Minimize = forwardRef<SVGSVGElement, MinimizeProps>(
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
      <path d="M15 19v-2a2 2 0 0 1 2-2h2"/><path d="M15 5v2a2 2 0 0 0 2 2h2"/><path d="M5 15h2a2 2 0 0 1 2 2v2"/><path d="M5 9h2a2 2 0 0 0 2-2V5"/>
    </svg>
  )
)

Minimize.displayName = 'Minimize'

export { Minimize }
export type { MinimizeProps }
