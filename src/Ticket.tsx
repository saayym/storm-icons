import { forwardRef } from 'react'

interface TicketProps extends React.SVGProps<SVGSVGElement> {}

const Ticket = forwardRef<SVGSVGElement, TicketProps>(
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
      <rect x="2" y="7" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><path d="M2 9a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2 2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M9 5v14"/>
    </svg>
  )
)

Ticket.displayName = 'Ticket'

export { Ticket }
export type { TicketProps }
