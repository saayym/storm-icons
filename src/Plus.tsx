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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M12 5v14"/><path d="M5 12h14"/>
    </svg>
  )
)

Plus.displayName = 'Plus'

export { Plus }
export type { PlusProps }
