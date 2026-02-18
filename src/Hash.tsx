import { forwardRef } from 'react'

interface HashProps extends React.SVGProps<SVGSVGElement> {}

const Hash = forwardRef<SVGSVGElement, HashProps>(
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
      <path d="M4 9h16"/><path d="M4 15h16"/><path d="M9 3 7 21"/><path d="m17 3-2 18"/>
    </svg>
  )
)

Hash.displayName = 'Hash'

export { Hash }
export type { HashProps }
