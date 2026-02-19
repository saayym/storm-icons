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
      <path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/>
    </svg>
  )
)

TrendingUp.displayName = 'TrendingUp'

export { TrendingUp }
export type { TrendingUpProps }
