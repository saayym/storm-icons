import { forwardRef } from 'react'

interface LogInProps extends React.SVGProps<SVGSVGElement> {}

const LogIn = forwardRef<SVGSVGElement, LogInProps>(
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
      <path d="M15 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2"/><path d="M21 12H8l3-3"/><path d="m11 15-3-3"/>
    </svg>
  )
)

LogIn.displayName = 'LogIn'

export { LogIn }
export type { LogInProps }
