import { forwardRef } from 'react'

interface SparkleProps extends React.SVGProps<SVGSVGElement> {}

const Sparkle = forwardRef<SVGSVGElement, SparkleProps>(
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
      <path d="m12 2 2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/>
    </svg>
  )
)

Sparkle.displayName = 'Sparkle'

export { Sparkle }
export type { SparkleProps }
