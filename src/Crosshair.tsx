import { forwardRef } from 'react'

interface CrosshairProps extends React.SVGProps<SVGSVGElement> {}

const Crosshair = forwardRef<SVGSVGElement, CrosshairProps>(
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
      <circle cx="12" cy="12" r="10"/><path d="M22 12h-4"/><path d="M6 12H2"/><path d="M12 6V2"/><path d="M12 22v-4"/>
    </svg>
  )
)

Crosshair.displayName = 'Crosshair'

export { Crosshair }
export type { CrosshairProps }
