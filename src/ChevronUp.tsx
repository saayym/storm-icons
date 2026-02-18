import { forwardRef } from 'react'

interface ChevronUpProps extends React.SVGProps<SVGSVGElement> {}

const ChevronUp = forwardRef<SVGSVGElement, ChevronUpProps>(
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
      <path d="m6 15 6-6 6 6"/>
    </svg>
  )
)

ChevronUp.displayName = 'ChevronUp'

export { ChevronUp }
export type { ChevronUpProps }
