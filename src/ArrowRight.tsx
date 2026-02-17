import { forwardRef } from 'react'

interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {}

const ArrowRight = forwardRef<SVGSVGElement, ArrowRightProps>(
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
      <path d="M3 10h9"/><path d="M3 14h5"/><path d="m14 6 7 6-7 6"/>
    </svg>
  )
)

ArrowRight.displayName = 'ArrowRight'

export { ArrowRight }
export type { ArrowRightProps }
