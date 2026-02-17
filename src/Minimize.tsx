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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 14h6v6m10-10h-6V4m0 6 7-7M3 21l7-7"/>
    </svg>
  )
)

Minimize.displayName = 'Minimize'

export { Minimize }
export type { MinimizeProps }
