import { forwardRef } from 'react'

interface UserCheckProps extends React.SVGProps<SVGSVGElement> {}

const UserCheck = forwardRef<SVGSVGElement, UserCheckProps>(
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="m17 11 2 2 4-4"/>
    </svg>
  )
)

UserCheck.displayName = 'UserCheck'

export { UserCheck }
export type { UserCheckProps }
