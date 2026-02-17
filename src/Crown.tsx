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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m2 4 3 12h14l3-12-6 7-4-7-4 7z"/><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7z"/><path d="M5 20h14"/>
    </svg>
  )
)

Crown.displayName = 'Crown'

export { Crown }
export type { CrownProps }
