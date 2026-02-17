import { forwardRef } from 'react'

interface StrikethroughProps extends React.SVGProps<SVGSVGElement> {}

const Strikethrough = forwardRef<SVGSVGElement, StrikethroughProps>(
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
      <path d="M16 4H9a3 3 0 0 0-3 3c0 2 2 3 5 4"/><path d="M13 16c3 1 5 2 5 4a3 3 0 0 1-3 3H8"/><path d="M3 12h18"/>
    </svg>
  )
)

Strikethrough.displayName = 'Strikethrough'

export { Strikethrough }
export type { StrikethroughProps }
