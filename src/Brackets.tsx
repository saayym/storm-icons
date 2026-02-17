import { forwardRef } from 'react'

interface BracketsProps extends React.SVGProps<SVGSVGElement> {}

const Brackets = forwardRef<SVGSVGElement, BracketsProps>(
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
      <path d="M16 3h3v18h-3"/><path d="M8 3H5v18h3"/>
    </svg>
  )
)

Brackets.displayName = 'Brackets'

export { Brackets }
export type { BracketsProps }
