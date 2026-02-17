import { forwardRef } from 'react'

interface ChevronDownProps extends React.SVGProps<SVGSVGElement> {}

const ChevronDown = forwardRef<SVGSVGElement, ChevronDownProps>(
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
      <path d="m5 7 7 7 7-7"/><path d="m9 12 3 3 3-3"/>
    </svg>
  )
)

ChevronDown.displayName = 'ChevronDown'

export { ChevronDown }
export type { ChevronDownProps }
