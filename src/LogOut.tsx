import { forwardRef } from 'react'

interface LogOutProps extends React.SVGProps<SVGSVGElement> {}

const LogOut = forwardRef<SVGSVGElement, LogOutProps>(
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
      <path d="M9 21H3V3h6"/><path d="M9 12h12"/><path d="m17 8 4 4-4 4"/>
    </svg>
  )
)

LogOut.displayName = 'LogOut'

export { LogOut }
export type { LogOutProps }
