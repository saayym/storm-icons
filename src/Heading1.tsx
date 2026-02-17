import { forwardRef } from 'react'

interface Heading1Props extends React.SVGProps<SVGSVGElement> {}

const Heading1 = forwardRef<SVGSVGElement, Heading1Props>(
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
      <path d="M4 12h8m-8 6V6m8 12V6m5 6 3-2v8"/>
    </svg>
  )
)

Heading1.displayName = 'Heading1'

export { Heading1 }
export type { Heading1Props }
