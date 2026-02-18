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
      <path d="M15 3h6v18h-6"/><path d="M3 12h12"/><path d="m11 8 4 4-4 4"/>
    </svg>
  )
)

LogIn.displayName = 'LogIn'

export { LogIn }
export type { LogInProps }
