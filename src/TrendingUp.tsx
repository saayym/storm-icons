import { forwardRef } from 'react'

interface TrendingUpProps extends React.SVGProps<SVGSVGElement> {}

const TrendingUp = forwardRef<SVGSVGElement, TrendingUpProps>(
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
      <path d="m23 6-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/>
    </svg>
  )
)

TrendingUp.displayName = 'TrendingUp'

export { TrendingUp }
export type { TrendingUpProps }
