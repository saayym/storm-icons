import { forwardRef } from 'react'

interface WalletProps extends React.SVGProps<SVGSVGElement> {}

const Wallet = forwardRef<SVGSVGElement, WalletProps>(
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
      <rect width="20" height="14" x="2" y="6" rx="1"/><path d="M2 6V5a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v1"/><rect width="5" height="4" x="15" y="11" rx="1"/><circle cx="17.5" cy="13" r=".5"/>
    </svg>
  )
)

Wallet.displayName = 'Wallet'

export { Wallet }
export type { WalletProps }
