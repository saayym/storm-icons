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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M17 7 7 17"/><path d="M16 17H7V8"/>
    </svg>
  )
)

ArrowDownLeft.displayName = 'ArrowDownLeft'

export { ArrowDownLeft }
export type { ArrowDownLeftProps }
