import { forwardRef } from 'react'

interface CrownProps extends React.SVGProps<SVGSVGElement> {}

const Crown = forwardRef<SVGSVGElement, CrownProps>(
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
      <path d="M2 18 4 6l5 5 3-7 3 7 5-5 2 12z"/><path d="M2 18h20"/>
    </svg>
  )
)

Crown.displayName = 'Crown'

export { Crown }
export type { CrownProps }
