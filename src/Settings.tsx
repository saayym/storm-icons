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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity=".15" stroke="none"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/><circle cx="12" cy="12" r="3"/>
    </svg>
  )
)

Settings.displayName = 'Settings'

export { Settings }
export type { SettingsProps }
