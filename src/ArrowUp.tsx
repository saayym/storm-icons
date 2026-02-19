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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="M12 5v14"/><path d="m18 11-6-6"/><path d="m6 11 6-6"/>
    </svg>
  )
)

ArrowUp.displayName = 'ArrowUp'

export { ArrowUp }
export type { ArrowUpProps }
