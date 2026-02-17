import { forwardRef } from 'react'

interface HandCoinsProps extends React.SVGProps<SVGSVGElement> {}

const HandCoins = forwardRef<SVGSVGElement, HandCoinsProps>(
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
      <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"/><path d="m2 16 6 6"/><circle cx="16" cy="6" r="4" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="16" cy="6" r="4"/>
    </svg>
  )
)

HandCoins.displayName = 'HandCoins'

export { HandCoins }
export type { HandCoinsProps }
