import { forwardRef } from 'react'

interface InfinityProps extends React.SVGProps<SVGSVGElement> {}

const Infinity = forwardRef<SVGSVGElement, InfinityProps>(
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
      <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.74-8z"/>
    </svg>
  )
)

Infinity.displayName = 'Infinity'

export { Infinity }
export type { InfinityProps }
