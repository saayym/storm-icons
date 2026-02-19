import { forwardRef } from 'react'

interface DiamondProps extends React.SVGProps<SVGSVGElement> {}

const Diamond = forwardRef<SVGSVGElement, DiamondProps>(
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
      <path d="m12 2 10 10-10 10L2 12z"/>
    </svg>
  )
)

Diamond.displayName = 'Diamond'

export { Diamond }
export type { DiamondProps }
