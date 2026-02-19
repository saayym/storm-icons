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
      <path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>
    </svg>
  )
)

RefreshCw.displayName = 'RefreshCw'

export { RefreshCw }
export type { RefreshCwProps }
