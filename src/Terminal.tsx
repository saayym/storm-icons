import { forwardRef } from 'react'

interface TerminalProps extends React.SVGProps<SVGSVGElement> {}

const Terminal = forwardRef<SVGSVGElement, TerminalProps>(
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
      <path d="M3 3h18v18H3z"/><path d="m7 9 4 4-4 4"/><path d="M13 17h4"/>
    </svg>
  )
)

Terminal.displayName = 'Terminal'

export { Terminal }
export type { TerminalProps }
