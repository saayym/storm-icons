import { forwardRef } from 'react'

interface UnderlineProps extends React.SVGProps<SVGSVGElement> {}

const Underline = forwardRef<SVGSVGElement, UnderlineProps>(
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
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/><path d="M4 21h16"/>
    </svg>
  )
)

Underline.displayName = 'Underline'

export { Underline }
export type { UnderlineProps }
