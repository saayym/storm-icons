import { forwardRef } from 'react'

interface EyeProps extends React.SVGProps<SVGSVGElement> {}

const Eye = forwardRef<SVGSVGElement, EyeProps>(
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
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8"/><circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="12" r="3"/>
    </svg>
  )
)

Eye.displayName = 'Eye'

export { Eye }
export type { EyeProps }
