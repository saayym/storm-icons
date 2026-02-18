import { forwardRef } from 'react'

interface ShoppingBagProps extends React.SVGProps<SVGSVGElement> {}

const ShoppingBag = forwardRef<SVGSVGElement, ShoppingBagProps>(
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
      <rect width="16" height="14" x="4" y="7" rx="1"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/>
    </svg>
  )
)

ShoppingBag.displayName = 'ShoppingBag'

export { ShoppingBag }
export type { ShoppingBagProps }
