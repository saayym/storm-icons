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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M3 7v4a2 2 0 0 0 0 4v4h18v-4a2 2 0 0 0 0-4V7z"/><path d="M9 7v10"/>
    </svg>
  )
)

Ticket.displayName = 'Ticket'

export { Ticket }
export type { TicketProps }
