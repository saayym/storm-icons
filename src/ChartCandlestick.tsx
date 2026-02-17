import { forwardRef } from 'react'

interface ChartCandlestickProps extends React.SVGProps<SVGSVGElement> {}

const ChartCandlestick = forwardRef<SVGSVGElement, ChartCandlestickProps>(
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
      <path d="M9 5v4"/><rect x="7" y="9" rx="1"/><path d="M9 15v2"/><path d="M17 3v2"/><rect x="15" y="5" rx="1"/><path d="M17 11v6"/>
    </svg>
  )
)

ChartCandlestick.displayName = 'ChartCandlestick'

export { ChartCandlestick }
export type { ChartCandlestickProps }
