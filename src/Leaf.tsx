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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M11 20A7 7 0 0 0 9.8 6.9C15.5 4.9 20 2 20 2s-3 4.5-1 12.5c0 0-2-.5-4.5-1.5"/><path d="M11 20A7 7 0 0 0 9.8 6.9C15.5 4.9 20 2 20 2s-3 4.5-1 12.5c0 0-2-.5-4.5-1.5"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  )
)

Leaf.displayName = 'Leaf'

export { Leaf }
export type { LeafProps }
