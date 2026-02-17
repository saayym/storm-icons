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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="9" cy="21" r="1" fill="currentColor" fillOpacity=".15" stroke="none"/><circle cx="20" cy="21" r="1" fill="currentColor" fillOpacity=".15" stroke="none"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
    </svg>
  )
)

ShoppingCart.displayName = 'ShoppingCart'

export { ShoppingCart }
export type { ShoppingCartProps }
