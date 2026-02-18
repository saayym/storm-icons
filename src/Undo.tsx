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
      <path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
    </svg>
  )
)

Undo.displayName = 'Undo'

export { Undo }
export type { UndoProps }
