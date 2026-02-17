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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="2" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="4" y="2" rx="2"/><path d="M8 6h8"/><path d="M16 14v4"/><path d="M8 11h.01"/><path d="M12 11h.01"/><path d="M16 11h.01"/><path d="M8 15h.01"/><path d="M12 15h.01"/>
    </svg>
  )
)

Calculator.displayName = 'Calculator'

export { Calculator }
export type { CalculatorProps }
