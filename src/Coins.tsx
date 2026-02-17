import { forwardRef } from 'react'

interface CoinsProps extends React.SVGProps<SVGSVGElement> {}

const Coins = forwardRef<SVGSVGElement, CoinsProps>(
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
      <circle cx="8" cy="8" r="6" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h.01"/><path d="M9 10h.01"/>
    </svg>
  )
)

Coins.displayName = 'Coins'

export { Coins }
export type { CoinsProps }
