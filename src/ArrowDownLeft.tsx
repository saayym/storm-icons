import { forwardRef } from 'react'

interface ArrowDownLeftProps extends React.SVGProps<SVGSVGElement> {}

const ArrowDownLeft = forwardRef<SVGSVGElement, ArrowDownLeftProps>(
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
      <path d="M17 7 7 17"/><path d="M13 17H7v-6"/>
    </svg>
  )
)

ArrowDownLeft.displayName = 'ArrowDownLeft'

export { ArrowDownLeft }
export type { ArrowDownLeftProps }
