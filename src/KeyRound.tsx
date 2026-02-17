import { forwardRef } from 'react'

interface KeyRoundProps extends React.SVGProps<SVGSVGElement> {}

const KeyRound = forwardRef<SVGSVGElement, KeyRoundProps>(
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
      <circle cx="7.5" cy="15.5" r="5.5" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="7.5" cy="15.5" r="5.5"/><path d="M11.5 11.5 17 6m5-4-5 5m0-1 4 4"/>
    </svg>
  )
)

KeyRound.displayName = 'KeyRound'

export { KeyRound }
export type { KeyRoundProps }
