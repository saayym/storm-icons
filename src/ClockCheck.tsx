import { forwardRef } from 'react'

interface ClockCheckProps extends React.SVGProps<SVGSVGElement> {}

const ClockCheck = forwardRef<SVGSVGElement, ClockCheckProps>(
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
      <path d="M20.942 13.021a9 9 0 1 0-9.407 7.967"/><path d="M12 7v5l3 3"/><path d="m15 19 2 2 4-4"/>
    </svg>
  )
)

ClockCheck.displayName = 'ClockCheck'

export { ClockCheck }
export type { ClockCheckProps }
