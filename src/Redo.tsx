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
      <path d="M23 4v6h-6"/><path d="M20.49 15a9 9 0 1 1-2.13-9.36L23 10"/>
    </svg>
  )
)

Redo.displayName = 'Redo'

export { Redo }
export type { RedoProps }
