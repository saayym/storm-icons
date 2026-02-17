import { forwardRef } from 'react'

interface StoreProps extends React.SVGProps<SVGSVGElement> {}

const Store = forwardRef<SVGSVGElement, StoreProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="m3 9 1-4h16l1 4z"/><path d="m3 9 1-4h16l1 4"/><path d="M3 9h18v12H3z"/><path d="M10 9v12"/><path d="M3 9c0 1.66 1.34 3 3 3s3-1.34 3-3"/><path d="M9 9c0 1.66 1.34 3 3 3s3-1.34 3-3"/><path d="M15 9c0 1.66 1.34 3 3 3s3-1.34 3-3"/>
    </svg>
  )
)

Store.displayName = 'Store'

export { Store }
export type { StoreProps }
