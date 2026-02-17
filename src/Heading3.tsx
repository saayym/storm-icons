import { forwardRef } from 'react'

interface Heading3Props extends React.SVGProps<SVGSVGElement> {}

const Heading3 = forwardRef<SVGSVGElement, Heading3Props>(
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
      <path d="M4 12h8m-8 6V6m8 12V6"/><path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2 2 2 0 0 1 2 2c0 1.5-1.8 2.5-3.5 1.5"/>
    </svg>
  )
)

Heading3.displayName = 'Heading3'

export { Heading3 }
export type { Heading3Props }
