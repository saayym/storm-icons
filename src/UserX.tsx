import { forwardRef } from 'react'

interface UserXProps extends React.SVGProps<SVGSVGElement> {}

const UserX = forwardRef<SVGSVGElement, UserXProps>(
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="m18 8 5 5"/><path d="m23 8-5 5"/>
    </svg>
  )
)

UserX.displayName = 'UserX'

export { UserX }
export type { UserXProps }
