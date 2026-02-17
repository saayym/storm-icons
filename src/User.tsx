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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M10 3h4l2 2v3l-2 2h-4L8 8V5z"/><path d="M10 3h4l2 2v3l-2 2h-4L8 8V5z"/><path d="M5 21v-2l3-4h8l3 4v2"/>
    </svg>
  )
)

User.displayName = 'User'

export { User }
export type { UserProps }
