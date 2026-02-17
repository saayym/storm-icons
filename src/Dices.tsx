import { forwardRef } from 'react'

interface DicesProps extends React.SVGProps<SVGSVGElement> {}

const Dices = forwardRef<SVGSVGElement, DicesProps>(
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
      <rect x="2" y="10" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="10" y="2" fill="currentColor" fillOpacity=".15" stroke="none" rx="2"/><rect x="2" y="10" rx="2"/><rect x="10" y="2" rx="2"/><circle cx="7" cy="15" r=".5"/><circle cx="9" cy="17" r=".5"/><circle cx="15" cy="7" r=".5"/><circle cx="17" cy="9" r=".5"/>
    </svg>
  )
)

Dices.displayName = 'Dices'

export { Dices }
export type { DicesProps }
