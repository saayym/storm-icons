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
      <path d="M12 3 4 7v5c0 5.25 3.4 10.15 8 11 4.6-.85 8-5.75 8-11V7z"/>
    </svg>
  )
)

Shield.displayName = 'Shield'

export { Shield }
export type { ShieldProps }
