import { forwardRef } from 'react'

interface MinusProps extends React.SVGProps<SVGSVGElement> {}

const Minus = forwardRef<SVGSVGElement, MinusProps>(
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
      <path d="M5 12h14"/>
    </svg>
  )
)

Minus.displayName = 'Minus'

export { Minus }
export type { MinusProps }
