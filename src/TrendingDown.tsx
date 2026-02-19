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
      <path d="m3 7 6 6 4-4 8 8"/><path d="M21 10v7h-7"/>
    </svg>
  )
)

TrendingDown.displayName = 'TrendingDown'

export { TrendingDown }
export type { TrendingDownProps }
