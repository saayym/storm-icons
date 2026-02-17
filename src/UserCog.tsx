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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="8.5" cy="7" r="4"/><path d="M16 21v-2a4 4 0 0 0-1-2.65"/><path d="M2 21v-2a4 4 0 0 1 4-4h5"/><circle cx="19" cy="16" r="2"/><path d="M19 12v1m0 6v1m-3.5-5.5.87.5m5.26 3 .87.5m-7-.5.87-.5m5.26-3 .87-.5"/>
    </svg>
  )
)

UserCog.displayName = 'UserCog'

export { UserCog }
export type { UserCogProps }
