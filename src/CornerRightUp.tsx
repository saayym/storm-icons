import { forwardRef } from 'react'

interface CornerRightUpProps extends React.SVGProps<SVGSVGElement> {}

const CornerRightUp = forwardRef<SVGSVGElement, CornerRightUpProps>(
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
      <path d="m10 9 5-5 5 5"/><path d="M4 20h7a4 4 0 0 0 4-4V4"/>
    </svg>
  )
)

CornerRightUp.displayName = 'CornerRightUp'

export { CornerRightUp }
export type { CornerRightUpProps }
