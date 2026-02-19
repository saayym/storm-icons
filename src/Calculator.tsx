import { forwardRef } from 'react'

interface CalculatorProps extends React.SVGProps<SVGSVGElement> {}

const Calculator = forwardRef<SVGSVGElement, CalculatorProps>(
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
      <rect width="16" height="20" x="4" y="2" rx="1"/><path d="M7 5h10v5H7z"/><path d="M7 14h2"/><path d="M11 14h2"/><path d="M15 14h2"/><path d="M7 18h2"/><path d="M11 18h2"/><path d="M15 18h2"/>
    </svg>
  )
)

Calculator.displayName = 'Calculator'

export { Calculator }
export type { CalculatorProps }
