import { forwardRef } from 'react'

interface TrashProps extends React.SVGProps<SVGSVGElement> {}

const Trash = forwardRef<SVGSVGElement, TrashProps>(
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
      <path d="M4 6h16"/><path d="M10 3h4"/><path d="M10 3v3"/><path d="M14 3v3"/><path d="M6 6h12v15H6z"/><path d="M10 10v7"/><path d="M14 10v7"/>
    </svg>
  )
)

Trash.displayName = 'Trash'

export { Trash }
export type { TrashProps }
