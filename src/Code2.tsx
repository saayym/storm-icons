import { forwardRef } from 'react'

interface Code2Props extends React.SVGProps<SVGSVGElement> {}

const Code2 = forwardRef<SVGSVGElement, Code2Props>(
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
      <path d="m7 8-4 4 4 4"/><path d="m17 8 4 4-4 4"/><path d="m14 4-4 16"/>
    </svg>
  )
)

Code2.displayName = 'Code2'

export { Code2 }
export type { Code2Props }
