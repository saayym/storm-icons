import { forwardRef } from 'react'

interface CalendarCheckProps extends React.SVGProps<SVGSVGElement> {}

const CalendarCheck = forwardRef<SVGSVGElement, CalendarCheckProps>(
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
      <rect x="3" y="4" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/>
    </svg>
  )
)

CalendarCheck.displayName = 'CalendarCheck'

export { CalendarCheck }
export type { CalendarCheckProps }
