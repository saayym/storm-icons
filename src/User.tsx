import { forwardRef } from 'react'

interface UserProps extends React.SVGProps<SVGSVGElement> {}

const User = forwardRef<SVGSVGElement, UserProps>(
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
      <circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>
    </svg>
  )
)

User.displayName = 'User'

export { User }
export type { UserProps }
