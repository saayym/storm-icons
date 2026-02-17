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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>
    </svg>
  )
)

Code2.displayName = 'Code2'

export { Code2 }
export type { Code2Props }
