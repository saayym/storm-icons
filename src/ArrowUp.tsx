import { forwardRef } from 'react'

interface ArrowUpProps extends React.SVGProps<SVGSVGElement> {}

const ArrowUp = forwardRef<SVGSVGElement, ArrowUpProps>(
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
      <path d="M10 21v-9"/><path d="M14 21v-5"/><path d="m6 10 6-7 6 7"/>
    </svg>
  )
)

ArrowUp.displayName = 'ArrowUp'

export { ArrowUp }
export type { ArrowUpProps }
