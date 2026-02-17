import { forwardRef } from 'react'

interface XProps extends React.SVGProps<SVGSVGElement> {}

const X = forwardRef<SVGSVGElement, XProps>(
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
      <path d="m6 6 4 4"/><path d="m14 14 4 4"/><path d="m18 6-4 4"/><path d="m6 18 4-4"/>
    </svg>
  )
)

X.displayName = 'X'

export { X }
export type { XProps }
