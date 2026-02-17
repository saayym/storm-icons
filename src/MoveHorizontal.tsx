import { forwardRef } from 'react'

interface MoveHorizontalProps extends React.SVGProps<SVGSVGElement> {}

const MoveHorizontal = forwardRef<SVGSVGElement, MoveHorizontalProps>(
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
      <path d="m18 8 4 4-4 4"/><path d="m6 8-4 4 4 4"/><path d="M2 12h20"/>
    </svg>
  )
)

MoveHorizontal.displayName = 'MoveHorizontal'

export { MoveHorizontal }
export type { MoveHorizontalProps }
