import { forwardRef } from 'react'

interface ShieldProps extends React.SVGProps<SVGSVGElement> {}

const Shield = forwardRef<SVGSVGElement, ShieldProps>(
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
      <path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6 12 12 0 0 0 12 3"/>
    </svg>
  )
)

Shield.displayName = 'Shield'

export { Shield }
export type { ShieldProps }
