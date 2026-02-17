import { forwardRef } from 'react'

interface ActivityProps extends React.SVGProps<SVGSVGElement> {}

const Activity = forwardRef<SVGSVGElement, ActivityProps>(
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
    </svg>
  )
)

Activity.displayName = 'Activity'

export { Activity }
export type { ActivityProps }
