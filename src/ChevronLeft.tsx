import { forwardRef } from 'react'

interface ChevronLeftProps extends React.SVGProps<SVGSVGElement> {}

const ChevronLeft = forwardRef<SVGSVGElement, ChevronLeftProps>(
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
      <path d="m15 6-6 6 6 6"/>
    </svg>
  )
)

ChevronLeft.displayName = 'ChevronLeft'

export { ChevronLeft }
export type { ChevronLeftProps }
