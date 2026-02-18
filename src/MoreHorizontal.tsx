import { forwardRef } from 'react'

interface MoreHorizontalProps extends React.SVGProps<SVGSVGElement> {}

const MoreHorizontal = forwardRef<SVGSVGElement, MoreHorizontalProps>(
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
      <circle cx="6" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="18" cy="12" r="1.5"/>
    </svg>
  )
)

MoreHorizontal.displayName = 'MoreHorizontal'

export { MoreHorizontal }
export type { MoreHorizontalProps }
