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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="m9 6 6 6-6 6"/>
    </svg>
  )
)

ChevronRight.displayName = 'ChevronRight'

export { ChevronRight }
export type { ChevronRightProps }
