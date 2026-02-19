import { forwardRef } from 'react'

interface UserCogProps extends React.SVGProps<SVGSVGElement> {}

const UserCog = forwardRef<SVGSVGElement, UserCogProps>(
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
      <path d="M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0"/><path d="M6 21v-2a4 4 0 0 1 4-4h2.5"/><path d="M17.001 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M19.001 15.5V17"/><path d="M19.001 21v1.5"/><path d="m22.032 17.25-1.299.75"/><path d="m17.27 20-1.3.75"/><path d="m15.97 17.25 1.3.75"/><path d="m20.733 20 1.3.75"/>
    </svg>
  )
)

UserCog.displayName = 'UserCog'

export { UserCog }
export type { UserCogProps }
