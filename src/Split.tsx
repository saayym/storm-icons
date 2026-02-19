import { forwardRef } from 'react'

interface SplitProps extends React.SVGProps<SVGSVGElement> {}

const Split = forwardRef<SVGSVGElement, SplitProps>(
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
      <path d="M21 17h-8l-3.5-5H3"/><path d="M21 7h-8l-3.495 5"/><path d="m18 10 3-3-3-3"/><path d="m18 20 3-3-3-3"/>
    </svg>
  )
)

Split.displayName = 'Split'

export { Split }
export type { SplitProps }
