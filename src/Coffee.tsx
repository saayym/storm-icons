import { forwardRef } from 'react'

interface CoffeeProps extends React.SVGProps<SVGSVGElement> {}

const Coffee = forwardRef<SVGSVGElement, CoffeeProps>(
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
      <path fill="currentColor" fillOpacity=".15" stroke="none" d="M17 8h1a4 4 0 0 1 0 8h-1zM3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><path d="M6 2v2"/><path d="M10 2v2"/><path d="M14 2v2"/>
    </svg>
  )
)

Coffee.displayName = 'Coffee'

export { Coffee }
export type { CoffeeProps }
