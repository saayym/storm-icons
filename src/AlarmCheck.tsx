import { forwardRef } from 'react'

interface AlarmCheckProps extends React.SVGProps<SVGSVGElement> {}

const AlarmCheck = forwardRef<SVGSVGElement, AlarmCheckProps>(
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
      <circle cx="12" cy="13" r="8" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="13" r="8"/><path d="M5 3 2 6m20 0-3-3"/><path d="m9.5 13 2 2 4-4"/>
    </svg>
  )
)

AlarmCheck.displayName = 'AlarmCheck'

export { AlarmCheck }
export type { AlarmCheckProps }
