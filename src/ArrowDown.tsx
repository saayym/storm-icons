import { forwardRef } from 'react'

interface ArrowDownProps extends React.SVGProps<SVGSVGElement> {}

const ArrowDown = forwardRef<SVGSVGElement, ArrowDownProps>(
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
      <path d="M10 3v9"/><path d="M14 3v5"/><path d="m6 14 6 7 6-7"/>
    </svg>
  )
)

ArrowDown.displayName = 'ArrowDown'

export { ArrowDown }
export type { ArrowDownProps }
