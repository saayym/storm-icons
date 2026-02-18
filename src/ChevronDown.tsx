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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  )
)

ChevronDown.displayName = 'ChevronDown'

export { ChevronDown }
export type { ChevronDownProps }
