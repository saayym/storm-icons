import { forwardRef } from 'react'

interface RefreshCwProps extends React.SVGProps<SVGSVGElement> {}

const RefreshCw = forwardRef<SVGSVGElement, RefreshCwProps>(
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
      <path d="M21 4v5h-5"/><path d="M3 20v-5h5"/><path d="M21 9A9 9 0 0 0 6.3 5.3L3 8"/><path d="M3 15a9 9 0 0 0 14.7 3.7L21 16"/>
    </svg>
  )
)

RefreshCw.displayName = 'RefreshCw'

export { RefreshCw }
export type { RefreshCwProps }
