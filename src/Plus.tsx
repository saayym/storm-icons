import { forwardRef } from 'react'

interface PlusProps extends React.SVGProps<SVGSVGElement> {}

const Plus = forwardRef<SVGSVGElement, PlusProps>(
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
      <path d="M12 3v6"/><path d="M12 15v6"/><path d="M3 12h6"/><path d="M15 12h6"/>
    </svg>
  )
)

Plus.displayName = 'Plus'

export { Plus }
export type { PlusProps }
