import { forwardRef } from 'react'

interface RotateCcwProps extends React.SVGProps<SVGSVGElement> {}

const RotateCcw = forwardRef<SVGSVGElement, RotateCcwProps>(
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
      <path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.12-9.36L1 10"/>
    </svg>
  )
)

RotateCcw.displayName = 'RotateCcw'

export { RotateCcw }
export type { RotateCcwProps }
