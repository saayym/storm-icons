import { forwardRef } from 'react'

interface CreditCardProps extends React.SVGProps<SVGSVGElement> {}

const CreditCard = forwardRef<SVGSVGElement, CreditCardProps>(
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
      <rect width="18" height="14" x="3" y="5" rx="1"/><path d="M3 10h18"/><path d="M7 15h6"/>
    </svg>
  )
)

CreditCard.displayName = 'CreditCard'

export { CreditCard }
export type { CreditCardProps }
