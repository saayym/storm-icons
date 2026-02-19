import { forwardRef } from 'react'

interface CornerDownLeftProps extends React.SVGProps<SVGSVGElement> {}

const CornerDownLeft = forwardRef<SVGSVGElement, CornerDownLeftProps>(
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
      <path d="M18 6v6a3 3 0 0 1-3 3H5l4-4m0 8-4-4"/>
    </svg>
  )
)

CornerDownLeft.displayName = 'CornerDownLeft'

export { CornerDownLeft }
export type { CornerDownLeftProps }
