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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <rect width="16" height="16" x="4" y="5" rx="1"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M4 10h16"/>
    </svg>
  )
)

Calendar.displayName = 'Calendar'

export { Calendar }
export type { CalendarProps }
