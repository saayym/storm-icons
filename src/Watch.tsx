import { forwardRef } from 'react'

interface WatchProps extends React.SVGProps<SVGSVGElement> {}

const Watch = forwardRef<SVGSVGElement, WatchProps>(
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
      <circle cx="12" cy="12" r="6" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="12" r="6"/><path d="M12 9v3l2 2"/><path d="M9 2h6l-1 4h-4z"/><path d="M9 22h6l-1-4h-4z"/>
    </svg>
  )
)

Watch.displayName = 'Watch'

export { Watch }
export type { WatchProps }
