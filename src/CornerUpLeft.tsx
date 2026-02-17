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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 14 4 9l5-5"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>
    </svg>
  )
)

CornerUpLeft.displayName = 'CornerUpLeft'

export { CornerUpLeft }
export type { CornerUpLeftProps }
