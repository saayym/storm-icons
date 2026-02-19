import { forwardRef } from 'react'

interface ArrowUpLeftProps extends React.SVGProps<SVGSVGElement> {}

const ArrowUpLeft = forwardRef<SVGSVGElement, ArrowUpLeftProps>(
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
      <path d="m7 7 10 10"/><path d="M16 7H7v9"/>
    </svg>
  )
)

ArrowUpLeft.displayName = 'ArrowUpLeft'

export { ArrowUpLeft }
export type { ArrowUpLeftProps }
