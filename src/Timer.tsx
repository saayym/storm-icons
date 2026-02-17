import { forwardRef } from 'react'

interface TimerProps extends React.SVGProps<SVGSVGElement> {}

const Timer = forwardRef<SVGSVGElement, TimerProps>(
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
      <circle cx="12" cy="14" r="8" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="14" r="8"/><path d="M12 10v4"/><path d="M10 2h4"/><path d="M12 2v4"/>
    </svg>
  )
)

Timer.displayName = 'Timer'

export { Timer }
export type { TimerProps }
