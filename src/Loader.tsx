import { forwardRef } from 'react'

interface LoaderProps extends React.SVGProps<SVGSVGElement> {}

const Loader = forwardRef<SVGSVGElement, LoaderProps>(
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
      <circle cx="12" cy="12" r="9" strokeDasharray="14 7"/>
    </svg>
  )
)

Loader.displayName = 'Loader'

export { Loader }
export type { LoaderProps }
