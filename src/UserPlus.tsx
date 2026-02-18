import { forwardRef } from 'react'

interface UserPlusProps extends React.SVGProps<SVGSVGElement> {}

const UserPlus = forwardRef<SVGSVGElement, UserPlusProps>(
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
      <circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M19 8v6"/><path d="M16 11h6"/>
    </svg>
  )
)

UserPlus.displayName = 'UserPlus'

export { UserPlus }
export type { UserPlusProps }
