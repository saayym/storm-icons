import { forwardRef } from 'react'

interface TrendingDownProps extends React.SVGProps<SVGSVGElement> {}

const TrendingDown = forwardRef<SVGSVGElement, TrendingDownProps>(
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
      <path d="m23 18-9.5-9.5-5 5L1 6"/><path d="M17 18h6v-6"/>
    </svg>
  )
)

TrendingDown.displayName = 'TrendingDown'

export { TrendingDown }
export type { TrendingDownProps }
