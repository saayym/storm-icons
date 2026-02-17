import { forwardRef } from 'react'

interface SirenProps extends React.SVGProps<SVGSVGElement> {}

const Siren = forwardRef<SVGSVGElement, SirenProps>(
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
      <path d="M7 18v-6a5 5 0 1 1 10 0v6"/><path d="M5 21h14"/><path d="M3 17h2m14 0h2M12 2v3M3.5 7 5 8.5M20.5 7 19 8.5"/>
    </svg>
  )
)

Siren.displayName = 'Siren'

export { Siren }
export type { SirenProps }
