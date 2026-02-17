import { forwardRef } from 'react'

interface AlarmClockProps extends React.SVGProps<SVGSVGElement> {}

const AlarmClock = forwardRef<SVGSVGElement, AlarmClockProps>(
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
      <circle cx="12" cy="13" r="8" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 1"/><path d="M5 3 2 6"/><path d="m19 3 3 3"/><path d="m6 19-2 2"/><path d="m18 19 2 2"/>
    </svg>
  )
)

AlarmClock.displayName = 'AlarmClock'

export { AlarmClock }
export type { AlarmClockProps }
