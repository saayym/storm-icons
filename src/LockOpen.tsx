import { forwardRef } from 'react'

interface LockOpenProps extends React.SVGProps<SVGSVGElement> {}

const LockOpen = forwardRef<SVGSVGElement, LockOpenProps>(
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
      <rect width="14" height="10" x="5" y="11" rx="1"/><path d="M8 11V7a4 4 0 0 1 7.4-2.1"/>
    </svg>
  )
)

LockOpen.displayName = 'LockOpen'

export { LockOpen }
export type { LockOpenProps }
