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
      <rect width="22" height="16" x="1" y="6" rx="2" ry="2"/><path d="M1 10h22"/><path d="m1 6 2.5-4h17L23 6"/>
    </svg>
  )
)

Wallet.displayName = 'Wallet'

export { Wallet }
export type { WalletProps }
