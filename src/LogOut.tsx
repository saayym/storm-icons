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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 3h5v18H4"/><path d="M12 10h8"/><path d="M15 14h5"/><path d="m17 8 4 4-4 4"/>
    </svg>
  )
)

LogOut.displayName = 'LogOut'

export { LogOut }
export type { LogOutProps }
