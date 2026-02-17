import { forwardRef } from 'react'

interface PartyPopperProps extends React.SVGProps<SVGSVGElement> {}

const PartyPopper = forwardRef<SVGSVGElement, PartyPopperProps>(
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
      <path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01M22 8h.01M15 2h.01M22 20h.01"/><path d="m9.1 7.9 2.2-1.3 1.4 2.1m.6 8.7 2.1 1.4-1.3 2.2"/><path d="m20 14.5-1 .5M9 3l.5 1"/>
    </svg>
  )
)

PartyPopper.displayName = 'PartyPopper'

export { PartyPopper }
export type { PartyPopperProps }
