import { forwardRef } from 'react'

interface ChevronRightProps extends React.SVGProps<SVGSVGElement> {}

const ChevronRight = forwardRef<SVGSVGElement, ChevronRightProps>(
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
      <path d="m7 5 7 7-7 7"/><path d="m12 9 3 3-3 3"/>
    </svg>
  )
)

ChevronRight.displayName = 'ChevronRight'

export { ChevronRight }
export type { ChevronRightProps }
