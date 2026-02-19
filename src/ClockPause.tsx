import { forwardRef } from 'react'

interface ClockPauseProps extends React.SVGProps<SVGSVGElement> {}

const ClockPause = forwardRef<SVGSVGElement, ClockPauseProps>(
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
      <path d="M20.942 13.018a9 9 0 1 0-7.909 7.922"/><path d="M12 7v5l2 2"/><path d="M17 17v5"/><path d="M21 17v5"/>
    </svg>
  )
)

ClockPause.displayName = 'ClockPause'

export { ClockPause }
export type { ClockPauseProps }
