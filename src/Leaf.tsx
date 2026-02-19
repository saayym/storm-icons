import { forwardRef } from 'react'

interface LeafProps extends React.SVGProps<SVGSVGElement> {}

const Leaf = forwardRef<SVGSVGElement, LeafProps>(
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
      <path d="M11 20a7 7 0 0 1-7-7c0-7 8-11 16-9 2 8-2 16-9 16"/><path d="m4 20 7-7"/>
    </svg>
  )
)

Leaf.displayName = 'Leaf'

export { Leaf }
export type { LeafProps }
