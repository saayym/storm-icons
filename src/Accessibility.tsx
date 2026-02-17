import { forwardRef } from 'react'

interface AccessibilityProps extends React.SVGProps<SVGSVGElement> {}

const Accessibility = forwardRef<SVGSVGElement, AccessibilityProps>(
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
      <circle cx="12" cy="4" r="2" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="12" cy="4" r="2"/><path d="m5 8 7 2 7-2"/><path d="M12 10v4l-3 6"/><path d="m12 14 3 6"/>
    </svg>
  )
)

Accessibility.displayName = 'Accessibility'

export { Accessibility }
export type { AccessibilityProps }
