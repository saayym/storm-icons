import { forwardRef } from 'react'

interface VolumeMuteProps extends React.SVGProps<SVGSVGElement> {}

const VolumeMute = forwardRef<SVGSVGElement, VolumeMuteProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M11 5 6 9H2v6h4l5 4z"/><path d="M11 5 6 9H2v6h4l5 4z"/><path d="m23 9-6 6"/><path d="m17 9 6 6"/>
    </svg>
  )
)

VolumeMute.displayName = 'VolumeMute'

export { VolumeMute }
export type { VolumeMuteProps }
