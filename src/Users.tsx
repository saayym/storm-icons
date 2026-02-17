import { forwardRef } from 'react'

interface UsersProps extends React.SVGProps<SVGSVGElement> {}

const Users = forwardRef<SVGSVGElement, UsersProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M8 3h4l2 2v3l-2 2H8L6 8V5z"/><path d="M8 3h4l2 2v3l-2 2H8L6 8V5z"/><path d="M3 21v-2l3-4h8l3 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M21 21v-2a4 4 0 0 0-3-3.87"/>
    </svg>
  )
)

Users.displayName = 'Users'

export { Users }
export type { UsersProps }
