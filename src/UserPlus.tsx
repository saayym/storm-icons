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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M10 3h4l2 2v3l-2 2h-4L8 8V5z"/><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/>
    </svg>
  )
)

UserPlus.displayName = 'UserPlus'

export { UserPlus }
export type { UserPlusProps }
