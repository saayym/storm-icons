import { forwardRef } from 'react'

interface ToggleRightProps extends React.SVGProps<SVGSVGElement> {}

const ToggleRight = forwardRef<SVGSVGElement, ToggleRightProps>(
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
      <rect x="1" y="5" fill="currentColor" fillOpacity=".15" stroke="none" rx="7"/><rect x="1" y="5" rx="7"/><circle cx="16" cy="12" r="3"/>
    </svg>
  )
)

ToggleRight.displayName = 'ToggleRight'

export { ToggleRight }
export type { ToggleRightProps }
