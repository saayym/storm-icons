import { forwardRef } from 'react'

interface VariableProps extends React.SVGProps<SVGSVGElement> {}

const Variable = forwardRef<SVGSVGElement, VariableProps>(
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
      <path d="M8 21s-4-3-4-9 4-9 4-9"/><path d="M16 3s4 3 4 9-4 9-4 9"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>
    </svg>
  )
)

Variable.displayName = 'Variable'

export { Variable }
export type { VariableProps }
