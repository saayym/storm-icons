import { forwardRef } from 'react'

interface MoveProps extends React.SVGProps<SVGSVGElement> {}

const Move = forwardRef<SVGSVGElement, MoveProps>(
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
      <path d="M12 2v20"/><path d="m15 19-3 3-3-3"/><path d="m9 5 3-3 3 3"/><path d="M2 12h20"/><path d="m5 9-3 3 3 3"/><path d="m19 9 3 3-3 3"/>
    </svg>
  )
)

Move.displayName = 'Move'

export { Move }
export type { MoveProps }
