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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M5 12h14"/><path d="m13 18 6-6"/><path d="m13 6 6 6"/>
    </svg>
  )
)

ArrowRight.displayName = 'ArrowRight'

export { ArrowRight }
export type { ArrowRightProps }
