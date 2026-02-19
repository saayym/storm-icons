import { forwardRef } from 'react'

interface RedoProps extends React.SVGProps<SVGSVGElement> {}

const Redo = forwardRef<SVGSVGElement, RedoProps>(
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
      <path d="m15 14 4-4-4-4"/><path d="M19 10H8a4 4 0 1 0 0 8h1"/>
    </svg>
  )
)

Redo.displayName = 'Redo'

export { Redo }
export type { RedoProps }
