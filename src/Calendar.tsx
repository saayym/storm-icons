import { forwardRef } from 'react'

interface CalendarProps extends React.SVGProps<SVGSVGElement> {}

const Calendar = forwardRef<SVGSVGElement, CalendarProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M4 5h16l2 2v13l-2 2H4l-2-2V7z"/><path d="M4 5h16l2 2v13l-2 2H4l-2-2V7z"/><path d="M2 10h20"/><path d="M8 2v4"/><path d="M16 2v4"/>
    </svg>
  )
)

Calendar.displayName = 'Calendar'

export { Calendar }
export type { CalendarProps }
