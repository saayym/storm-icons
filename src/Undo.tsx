import { forwardRef } from 'react'

interface UndoProps extends React.SVGProps<SVGSVGElement> {}

const Undo = forwardRef<SVGSVGElement, UndoProps>(
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
      <path d="m9 14-4-4 4-4"/><path d="M5 10h11a4 4 0 1 1 0 8h-1"/>
    </svg>
  )
)

Undo.displayName = 'Undo'

export { Undo }
export type { UndoProps }
