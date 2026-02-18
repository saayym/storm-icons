import { forwardRef } from 'react'

interface MoreVerticalProps extends React.SVGProps<SVGSVGElement> {}

const MoreVertical = forwardRef<SVGSVGElement, MoreVerticalProps>(
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
      <circle cx="12" cy="6" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="18" r="1.5"/>
    </svg>
  )
)

MoreVertical.displayName = 'MoreVertical'

export { MoreVertical }
export type { MoreVerticalProps }
