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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <rect width="20" height="10" x="2" y="7" rx="5"/><circle cx="16" cy="12" r="3"/>
    </svg>
  )
)

ToggleRight.displayName = 'ToggleRight'

export { ToggleRight }
export type { ToggleRightProps }
