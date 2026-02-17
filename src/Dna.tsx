import { forwardRef } from 'react'

interface DnaProps extends React.SVGProps<SVGSVGElement> {}

const Dna = forwardRef<SVGSVGElement, DnaProps>(
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
      <path d="M2 15c6.667-6 13.333 0 20-6"/><path d="M2 9c6.667 6 13.333 0 20 6"/><path d="M2 4h5"/><path d="M17 4h5"/><path d="M7 9h10"/><path d="M7 15h10"/><path d="M2 20h5"/><path d="M17 20h5"/>
    </svg>
  )
)

Dna.displayName = 'Dna'

export { Dna }
export type { DnaProps }
