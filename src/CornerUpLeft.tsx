import { forwardRef } from 'react'

interface CornerUpLeftProps extends React.SVGProps<SVGSVGElement> {}

const CornerUpLeft = forwardRef<SVGSVGElement, CornerUpLeftProps>(
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
      <path d="M18 18v-6a3 3 0 0 0-3-3H5l4-4m0 8L5 9"/>
    </svg>
  )
)

CornerUpLeft.displayName = 'CornerUpLeft'

export { CornerUpLeft }
export type { CornerUpLeftProps }
