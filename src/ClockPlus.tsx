import { forwardRef } from 'react'

interface ClockPlusProps extends React.SVGProps<SVGSVGElement> {}

const ClockPlus = forwardRef<SVGSVGElement, ClockPlusProps>(
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
      <path d="M20.984 12.535a9 9 0 1 0-8.468 8.45"/><path d="M16 19h6"/><path d="M19 16v6"/><path d="M12 7v5l3 3"/>
    </svg>
  )
)

ClockPlus.displayName = 'ClockPlus'

export { ClockPlus }
export type { ClockPlusProps }
