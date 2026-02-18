import { forwardRef } from 'react'

interface ShoppingCartProps extends React.SVGProps<SVGSVGElement> {}

const ShoppingCart = forwardRef<SVGSVGElement, ShoppingCartProps>(
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
      <path d="M3 3h2l2 13h11"/><path d="m7 16 1-9h12l-2 9z"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>
    </svg>
  )
)

ShoppingCart.displayName = 'ShoppingCart'

export { ShoppingCart }
export type { ShoppingCartProps }
