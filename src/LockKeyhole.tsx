import { forwardRef } from 'react'

interface LockKeyholeProps extends React.SVGProps<SVGSVGElement> {}

const LockKeyhole = forwardRef<SVGSVGElement, LockKeyholeProps>(
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
      <rect x="5" y="11" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="5" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/><circle cx="12" cy="16" r="1"/>
    </svg>
  )
)

LockKeyhole.displayName = 'LockKeyhole'

export { LockKeyhole }
export type { LockKeyholeProps }
