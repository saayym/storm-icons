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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <circle cx="6" cy="12" r="4"/><circle cx="18" cy="12" r="4"/><path d="M6 16h12"/>
    </svg>
  )
)

Voicemail.displayName = 'Voicemail'

export { Voicemail }
export type { VoicemailProps }
