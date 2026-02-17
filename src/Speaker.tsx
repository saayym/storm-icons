import { forwardRef } from 'react'

interface SpeakerProps extends React.SVGProps<SVGSVGElement> {}

const Speaker = forwardRef<SVGSVGElement, SpeakerProps>(
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
      <rect x="4" y="2" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="4" y="2" rx="2"/><circle cx="12" cy="14" r="4"/><circle cx="12" cy="6" r="1"/>
    </svg>
  )
)

Speaker.displayName = 'Speaker'

export { Speaker }
export type { SpeakerProps }
