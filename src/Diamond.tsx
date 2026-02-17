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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4.93" y="4.93" rx="1" transform="rotate(45 12 12)"/>
    </svg>
  )
)

Diamond.displayName = 'Diamond'

export { Diamond }
export type { DiamondProps }
