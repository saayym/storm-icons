import { forwardRef } from 'react'

interface MinusCircleProps extends React.SVGProps<SVGSVGElement> {}

const MinusCircle = forwardRef<SVGSVGElement, MinusCircleProps>(
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
      <circle cx="12" cy="12" r="10"/><path d="M8 12h8"/>
    </svg>
  )
)

MinusCircle.displayName = 'MinusCircle'

export { MinusCircle }
export type { MinusCircleProps }
