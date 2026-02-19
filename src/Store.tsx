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
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      {...props}
    >
      <path d="m3 9 1-5h16l1 5"/><path d="M3 9a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0 3 3 3 3 0 0 0 3-3"/><path d="M4 12v9"/><path d="M20 12v9"/><path d="M4 21h16"/><path d="M9 15h6v6H9z"/>
    </svg>
  )
)

Store.displayName = 'Store'

export { Store }
export type { StoreProps }
