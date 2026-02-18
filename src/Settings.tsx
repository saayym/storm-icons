import { forwardRef } from 'react'

interface SettingsProps extends React.SVGProps<SVGSVGElement> {}

const Settings = forwardRef<SVGSVGElement, SettingsProps>(
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
      <circle cx="12" cy="12" r="3"/><path d="m10.3 2.3-.6 2.1a7.5 7.5 0 0 0-3.3 1.9l-2-.8-1.7 3 1.9 1.3a7.5 7.5 0 0 0 0 3.8l-1.9 1.3 1.7 3 2-.8A7.5 7.5 0 0 0 9.7 19l.6 2.1h3.4l.6-2.1a7.5 7.5 0 0 0 3.3-1.9l2 .8 1.7-3-1.9-1.3a7.5 7.5 0 0 0 0-3.8l1.9-1.3-1.7-3-2 .8a7.5 7.5 0 0 0-3.3-1.9l-.6-2.1z"/>
    </svg>
  )
)

Settings.displayName = 'Settings'

export { Settings }
export type { SettingsProps }
