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
      <path d="m18 9 3 3-3 3"/><path d="M15 12h6"/><path d="m6 9-3 3 3 3"/><path d="M3 12h6"/><path d="m9 18 3 3 3-3"/><path d="M12 15v6"/><path d="m15 6-3-3-3 3"/><path d="M12 3v6"/>
    </svg>
  )
)

Move.displayName = 'Move'

export { Move }
export type { MoveProps }
