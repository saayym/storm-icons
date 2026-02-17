import { forwardRef } from 'react'

interface UserLockProps extends React.SVGProps<SVGSVGElement> {}

const UserLock = forwardRef<SVGSVGElement, UserLockProps>(
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
      <circle cx="8.5" cy="7" r="4"/><path d="M2 21v-2a4 4 0 0 1 4-4h5"/><rect x="16" y="16" rx="1"/><path d="M17 16v-2a2 2 0 1 1 4 0v2"/>
    </svg>
  )
)

UserLock.displayName = 'UserLock'

export { UserLock }
export type { UserLockProps }
