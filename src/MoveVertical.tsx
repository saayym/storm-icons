import { forwardRef } from 'react'

interface MoveVerticalProps extends React.SVGProps<SVGSVGElement> {}

const MoveVertical = forwardRef<SVGSVGElement, MoveVerticalProps>(
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
      <path d="m8 18 4 4 4-4"/><path d="m8 6 4-4 4 4"/><path d="M12 2v20"/>
    </svg>
  )
)

MoveVertical.displayName = 'MoveVertical'

export { MoveVertical }
export type { MoveVerticalProps }
