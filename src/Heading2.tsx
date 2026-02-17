import { forwardRef } from 'react'

interface Heading2Props extends React.SVGProps<SVGSVGElement> {}

const Heading2 = forwardRef<SVGSVGElement, Heading2Props>(
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
      <path d="M4 12h8m-8 6V6m8 12V6"/><path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"/>
    </svg>
  )
)

Heading2.displayName = 'Heading2'

export { Heading2 }
export type { Heading2Props }
