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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="m5 5 14 14"/><path d="M19 5 5 19"/>
    </svg>
  )
)

X.displayName = 'X'

export { X }
export type { XProps }
