import { forwardRef } from 'react'

interface UnlockProps extends React.SVGProps<SVGSVGElement> {}

const Unlock = forwardRef<SVGSVGElement, UnlockProps>(
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
      <rect x="5" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>
    </svg>
  )
)

Unlock.displayName = 'Unlock'

export { Unlock }
export type { UnlockProps }
