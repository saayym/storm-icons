import { forwardRef } from 'react'

interface VoicemailProps extends React.SVGProps<SVGSVGElement> {}

const Voicemail = forwardRef<SVGSVGElement, VoicemailProps>(
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
      <circle cx="5.5" cy="11.5" r="4.5"/><circle cx="18.5" cy="11.5" r="4.5"/><path d="M5.5 16h13"/>
    </svg>
  )
)

Voicemail.displayName = 'Voicemail'

export { Voicemail }
export type { VoicemailProps }
