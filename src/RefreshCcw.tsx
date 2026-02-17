import { forwardRef } from 'react'

interface RefreshCcwProps extends React.SVGProps<SVGSVGElement> {}

const RefreshCcw = forwardRef<SVGSVGElement, RefreshCcwProps>(
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
      <path d="M1 4v6h6"/><path d="M23 20v-6h-6"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15"/>
    </svg>
  )
)

RefreshCcw.displayName = 'RefreshCcw'

export { RefreshCcw }
export type { RefreshCcwProps }
