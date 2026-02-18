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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <rect width="14" height="10" x="5" y="11" rx="1"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>
    </svg>
  )
)

Unlock.displayName = 'Unlock'

export { Unlock }
export type { UnlockProps }
