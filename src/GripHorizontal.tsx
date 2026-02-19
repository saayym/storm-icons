import { forwardRef } from 'react'

interface GripHorizontalProps extends React.SVGProps<SVGSVGElement> {}

const GripHorizontal = forwardRef<SVGSVGElement, GripHorizontalProps>(
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
      <circle cx="5" cy="9" r="1"/><circle cx="12" cy="9" r="1"/><circle cx="19" cy="9" r="1"/><circle cx="5" cy="15" r="1"/><circle cx="12" cy="15" r="1"/><circle cx="19" cy="15" r="1"/>
    </svg>
  )
)

GripHorizontal.displayName = 'GripHorizontal'

export { GripHorizontal }
export type { GripHorizontalProps }
